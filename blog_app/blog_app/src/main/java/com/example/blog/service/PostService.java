package com.example.blog.service;

import com.example.blog.entities.Post;
import com.example.blog.payloads.PostResponse;
import com.example.blog.utils.PostDto;

import java.util.List;

public interface PostService {

    PostDto createPost(PostDto postDto, Integer userId, Integer catId);

    PostDto updatePost(PostDto postDto, Integer postId);

    void deletePost(Integer postId);

    PostDto getPostById(Integer postId);

//    List<PostDto> getAllPosts(Integer pageNumber, Integer pageSize);
    PostResponse getAllPosts(Integer pageNumber, Integer pageSize, String sortBy);

    List<PostDto> getPostByCategory(Integer categoryId);

    List<PostDto> getPostByUser(Integer userId);

    List<PostDto> searchPost(String keyword);
}
