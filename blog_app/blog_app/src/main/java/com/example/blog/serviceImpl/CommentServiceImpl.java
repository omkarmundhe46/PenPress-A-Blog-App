package com.example.blog.serviceImpl;

import com.example.blog.entities.Comment;
import com.example.blog.entities.Post;
import com.example.blog.exception.ResourceNotFoundException;
import com.example.blog.repository.CommentRepository;
import com.example.blog.repository.PostRepository;
import com.example.blog.service.CommentService;
import com.example.blog.utils.CommentDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CommentDto createComment(CommentDto commentDto, Integer postId) {
        Post post = this.postRepository.findById(postId).orElseThrow(() ->new ResourceNotFoundException("Post", "Post Id", postId));
        Comment comment = this.modelMapper.map(commentDto, Comment.class);
        comment.setPost(post);
        Comment saveComment = this.commentRepository.save(comment);
        return this.modelMapper.map(saveComment, CommentDto.class);
    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId).orElseThrow(() ->new ResourceNotFoundException("Comment", "Comment Id", commentId));
        this.commentRepository.delete(comment);
    }

    @Override
    public java.util.List<CommentDto> getCommentsByPost(Integer postId) {
        Post post = this.postRepository.findById(postId).orElseThrow(() ->new ResourceNotFoundException("Post", "Post Id", postId));
        java.util.List<Comment> comments = this.commentRepository.findByPost(post);
        return comments.stream().map(comment -> this.modelMapper.map(comment, CommentDto.class)).collect(java.util.stream.Collectors.toList());
    }
}
