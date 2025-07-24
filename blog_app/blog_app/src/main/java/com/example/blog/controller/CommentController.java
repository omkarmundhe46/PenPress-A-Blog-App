package com.example.blog.controller;

import com.example.blog.entities.Comment;
import com.example.blog.payloads.ApiResponse;
import com.example.blog.service.CommentService;
import com.example.blog.utils.CommentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/post/{postId}/comments")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto, @PathVariable Integer postId){
        CommentDto createdComment = this.commentService.createComment(commentDto, postId);
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<ApiResponse> deleteComment(@PathVariable Integer commentId){
        this.commentService.deleteComment(commentId);
        return new ResponseEntity<>(new ApiResponse("Comment Deleted Successfully", true), HttpStatus.OK);
    }

    @GetMapping("/post/{postId}/comments")
    public ResponseEntity<?> getCommentsByPost(@PathVariable Integer postId){
        return ResponseEntity.ok(this.commentService.getCommentsByPost(postId));
    }
}
