import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, Badge } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from '../context/userContext'

function Post({ post = { id: -1, title: "This is default post title", content: "This is default post content" }, deletePost }) {
    const userContextData = useContext(userContext)
    const [user, setUser] = useState(null)
    const [login, setLogin] = useState(null)
    
    useEffect(() => {
        setUser(getCurrentUserDetail())
        setLogin(isLoggedIn())
    }, [])

    const formatDate = (dateString) => {
        if (!dateString) return 'Recently'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        })
    }

    const getExcerpt = (content) => {
        if (!content) return 'No content available...'
        const textContent = content.replace(/<[^>]*>/g, '')
        return textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent
    }

    return (
        <Card className='post-card'>
            {/* Post Header with Author Info */}
            <div className="post-card-header">
                <div className="d-flex align-items-center mb-3">
                    <img
                        src={post.user?.image || '/images/default-avatar.png'}
                        alt="Author"
                        className="rounded-circle me-3"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                    
                    <div className="flex-grow-1">
                        <h6 className="mb-1 fw-bold">{post.user?.name || 'Anonymous'}</h6>
                        <div className="d-flex align-items-center text-muted small">
                            <span className="me-3">
                                <i className="fas fa-calendar me-1"></i>
                                {formatDate(post.addedDate)}
                            </span>
                            <span className="me-3">
                                <i className="fas fa-eye me-1"></i>
                                {Math.floor(Math.random() * 100) + 1} views
                            </span>
                            <span>
                                <i className="fas fa-clock me-1"></i>
                                {Math.floor(Math.random() * 5) + 1} min read
                            </span>
                        </div>
                    </div>
                    {post.category && (
                        <Badge className="bg-gradient text-white px-3 py-1 rounded-pill">
                            <i className="fas fa-tag me-1"></i>
                            {post.category.categoryTitle}
                        </Badge>
                    )}
                </div>
                
                <h3 className="post-card-title mb-0">{post.title}</h3>
            </div>
            
            <CardBody className="post-card-body">
                <CardText className="post-card-content mb-4">
                    {getExcerpt(post.content)}
                </CardText>

                {/* Engagement Stats */}
                <div className="d-flex align-items-center justify-content-between mb-3 py-2 border-top border-bottom">
                    <div className="d-flex gap-4">
                        <span className="text-muted small d-flex align-items-center">
                            <i className="fas fa-heart me-1 text-danger"></i>
                            {Math.floor(Math.random() * 50) + 5} likes
                        </span>
                        <span className="text-muted small d-flex align-items-center">
                            <i className="fas fa-comment me-1 text-primary"></i>
                            {Math.floor(Math.random() * 20) + 1} comments
                        </span>
                        <span className="text-muted small d-flex align-items-center">
                            <i className="fas fa-share me-1 text-success"></i>
                            {Math.floor(Math.random() * 10) + 1} shares
                        </span>
                    </div>
                    <div className="text-muted small">
                        <i className="fas fa-bookmark me-1"></i>
                        Save
                    </div>
                </div>

                <div className="post-card-actions">
                    <Button 
                        tag={Link} 
                        to={'/posts/' + (post.postId || post.id || 1)}
                        className="btn-primary-modern btn-modern me-2"
                        size="sm"
                    >
                        <i className="fas fa-book-open me-1"></i>
                        Read Full Story
                    </Button>
                    
                    {userContextData.user.login && user && user.id === post.user.id && (
                        <>
                            <Button 
                                tag={Link} 
                                to={`/user/update-blog/${post.postId || post.id}`}
                                className="btn-outline-modern btn-modern me-2"
                                size="sm"
                                style={{ color: '#f59e0b', borderColor: '#f59e0b' }}
                            >
                                <i className="fas fa-edit me-1"></i>
                                Edit
                            </Button>
                            <Button 
                                onClick={(event) => deletePost(post)}
                                className="btn-outline-modern btn-modern"
                                size="sm"
                                style={{ color: '#ef4444', borderColor: '#ef4444' }}
                            >
                                <i className="fas fa-trash me-1"></i>
                                Delete
                            </Button>
                        </>
                    )}
                </div>
            </CardBody>
        </Card>
    )
}

export default Post