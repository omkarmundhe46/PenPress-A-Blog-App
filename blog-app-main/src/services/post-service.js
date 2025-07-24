import { privateAxios } from "./helper";
import { myAxios } from "./helper";
//create post function
export const createPost = (postData) => {
  return privateAxios
    .post(
      `/api/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};

//get all posts
export const loadAllPosts = (pageNumber, pageSize) => {
  return myAxios
    .get(
      `/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=postId`
    )
    .then((response) => response.data);
};

//load single post of given id
export const loadPost = (postId) => {
  return myAxios.get(`/api/posts/${postId}`).then((response) => response.data);
};

export const createComment = (comment, postId) => {
  return privateAxios.post(`/api/post/${postId}/comments`, comment);
};

//upload post banner image
export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/api/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//get category wise posts
export function loadPostCategoryWise(categoryId) {
  return privateAxios
    .get(`/api/category/${categoryId}/posts`)
    .then((res) => res.data);
}

export function loadPostUserWise(userId) {
  return privateAxios.get(`/api/user/${userId}/posts`).then((res) => res.data);
}

//delete post
export function deletePostService(postId) {
  return privateAxios.delete(`/api/post/${postId}`).then((res) => res.data);
}

//update post
export function updatePost(post, postId) {
  return privateAxios.put(`/api/posts/${postId}`, post).then((resp) => resp.data);
}
