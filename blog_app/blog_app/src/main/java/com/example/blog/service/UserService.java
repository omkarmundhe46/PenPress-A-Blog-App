package com.example.blog.service;

import com.example.blog.utils.UserDto;

import java.util.List;

public interface UserService {

    UserDto registerNewUser(UserDto userDto);
    UserDto createUser(UserDto userDto);
    UserDto updateUser(UserDto userDto,Integer userId);
    UserDto getUserById(Integer userId);
    UserDto getUserByEmail(String email);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);
}
