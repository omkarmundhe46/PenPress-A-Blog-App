package com.example.blog.service;

import com.example.blog.entities.Comment;
import com.example.blog.utils.CommentDto;

import java.util.List;

public interface CommentService {

    CommentDto createComment(CommentDto commentDto, Integer postId);

    void deleteComment(Integer commentId);

    List<CommentDto> getCommentsByPost(Integer postId);
}
