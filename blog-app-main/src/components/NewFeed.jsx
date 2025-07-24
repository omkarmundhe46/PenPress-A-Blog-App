import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { loadAllPosts } from '../services/post-service'
import { Row, Col, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import Post from './Post'
import { toast } from 'react-toastify'
import InfiniteScroll from 'react-infinite-scroll-component'
import { deletePostService } from '../services/post-service'
function NewFeed() {


    const [postContent, setPostContent] = useState({
        content: [],
        totalPages: '',
        totalElements: '',
        pageSize: '',
        lastPage: false,
        pageNumber: ''

    })

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        console.log("loading posts")
        console.log(currentPage)
        changePage(currentPage)

    }, [currentPage])


    const changePage = (pageNumber = 0, pageSize = 5) => {
        if (pageNumber > postContent.pageNumber && postContent.lastPage) {
            return
        }
        if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
            return
        }
        loadAllPosts(pageNumber, pageSize).then(data => {
            console.log('Posts API response:', data);
            setPostContent({
                content: [...postContent.content, ...data.content],
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                pageSize: data.pageSize,
                lastPage: data.lastPage,
                pageNumber: data.pageNumber
            })
        }).catch(error => {
            console.error('Posts API error:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
                toast.error(`Error loading posts: ${error.response.status}`);
            } else {
                toast.error("Cannot connect to server");
            }
        })
    }



    function deletePost(post) {
        //going to delete post
        console.log(post)

        deletePostService(post.postId).then(res => {
            console.log(res)
            toast.success("post is deleled..")

            let newPostContents = postContent.content.filter(p => (p.postId || p.id) != (post.postId || post.id))
            setPostContent({ ...postContent, content: newPostContents })

        })
            .catch(error => {
                console.log(error)
                toast.error("error in deleting post")
            })
    }


    const changePageInfinite = () => {
        console.log("page chagned")
        setCurrentPage(currentPage + 1)

    }

    return (
        <div className="w-100">
            <Row>
                <Col xs={12}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h4 className="text-gradient fw-bold mb-1">Latest Stories</h4>
                            <p className="text-muted mb-0">
                                <i className="fas fa-newspaper me-1"></i>
                                {postContent?.totalElements || 0} posts available
                            </p>
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-modern btn-modern">
                                <i className="fas fa-fire me-1"></i>
                                Trending
                            </button>
                            <button className="btn btn-sm btn-outline-modern btn-modern">
                                <i className="fas fa-clock me-1"></i>
                                Recent
                            </button>
                        </div>
                    </div>

                    {postContent.content.length === 0 && !postContent.lastPage ? (
                        <div className="text-center py-5">
                            <div className="modern-card p-5">
                                <div className="loading-spinner mb-3 mx-auto" style={{ width: '40px', height: '40px' }}></div>
                                <h5 className="text-muted mb-2">Loading amazing stories...</h5>
                                <p className="text-muted small mb-0">Discovering the best content for you</p>
                            </div>
                        </div>
                    ) : postContent.content.length === 0 ? (
                        <div className="text-center py-5">
                            <div className="modern-card p-5">
                                <div className="mb-4">
                                    <i className="fas fa-book-open animate-pulse" style={{ fontSize: '4rem', color: 'var(--primary-color)', opacity: 0.3 }}></i>
                                </div>
                                <h4 className="text-muted mb-2">No posts available yet</h4>
                                <p className="text-muted mb-4">Be the first to share your story with the community!</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <button className="btn btn-primary-modern btn-modern">
                                        <i className="fas fa-pen-fancy me-1"></i>
                                        Write First Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <InfiniteScroll
                            dataLength={postContent.content.length}
                            next={changePageInfinite}
                            hasMore={!postContent.lastPage}
                            loader={
                                <div className="text-center py-4">
                                    <div className="modern-card p-4">
                                        <div className="loading-spinner mb-2 mx-auto"></div>
                                        <p className="text-muted mb-0">Loading more amazing stories...</p>
                                    </div>
                                </div>
                            }
                            endMessage={
                                <div className="text-center py-4">
                                    <div className="modern-card p-4">
                                        <i className="fas fa-check-circle text-success mb-3 animate-pulse" style={{ fontSize: '2.5rem' }}></i>
                                        <h5 className="text-success mb-2">🎉 You're all caught up!</h5>
                                        <p className="text-muted mb-3">You've read all the latest posts. Check back later for fresh content.</p>
                                        <div className="d-flex gap-2 justify-content-center flex-wrap">
                                            <button className="btn btn-sm btn-outline-modern btn-modern">
                                                <i className="fas fa-refresh me-1"></i>
                                                Refresh
                                            </button>
                                            <button className="btn btn-sm btn-primary-modern btn-modern">
                                                <i className="fas fa-bell me-1"></i>
                                                Notify Me
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                        >
                            <div className="posts-container">
                                {postContent.content.map((post, index) => (
                                    <Post deletePost={deletePost} post={post} key={`${post.id || index}`} />
                                ))}
                            </div>
                        </InfiniteScroll>
                    )}
                </Col>
            </Row>
        </div>


    )
}

export default NewFeed