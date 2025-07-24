-- Blog App Database Setup Script
-- Run this in MySQL to create the database

CREATE DATABASE IF NOT EXISTS blog_app_db;
USE blog_app_db;

-- The application will create tables automatically using JPA
-- This script just ensures the database exists

-- Check if database was created successfully
SELECT 'Database blog_app_db created successfully!' as message;