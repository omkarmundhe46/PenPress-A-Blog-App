package com.example.blog.repository;

import com.example.blog.entities.Category;
import com.example.blog.entities.Post;
import com.example.blog.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {
    List<Post> findByUser(User user);
    List<Post> findByCategory(Category category);
//    List<Post> findByTitleContaining(String keyword);

    @Query(" select p from Post p where p.title like :key")
    List<Post> searchByTitle(@Param("key") String title);
}
