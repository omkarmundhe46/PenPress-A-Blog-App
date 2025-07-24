import { privateAxios, myAxios } from "./helper";

export const createComment = (comment, postId) => {
  return privateAxios.post(`/api/post/${postId}/comments`, comment)
    .then((response) => response.data);
};

export const getCommentsByPost = (postId) => {
  return myAxios.get(`/api/post/${postId}/comments`)
    .then((response) => response.data);
};

export const deleteComment = (commentId) => {
  return privateAxios.delete(`/api/comments/${commentId}`)
    .then((response) => response.data);
};