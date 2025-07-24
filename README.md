# Blog Application

A full-stack blog application built with Spring Boot (Backend) and React (Frontend).

## Issues Fixed

### Backend Issues Fixed:
1. **POM.xml Malformed Tag**: Fixed `<n>blog_app</n>` to `<name>blog_app</name>`
2. **CORS Configuration**: Added CORS configuration to allow frontend-backend communication
3. **JWT Authentication Response**: Updated to return user information along with token
4. **Role Constants**: Fixed role names to match between data.sql and AppConstants
5. **Missing Service Method**: Added `getUserByEmail` method to UserService

### Frontend Issues Fixed:
1. **Login Response Handling**: Updated to handle new response format with user data
2. **Error Handling**: Improved error handling for API calls
3. **User Context**: Fixed user context data structure

## Prerequisites

- Java 21
- Node.js (v14 or higher)
- MySQL Server
- Maven

## Setup Instructions

### 1. Database Setup
1. Start MySQL server (XAMPP, WAMP, or standalone MySQL)
2. Run the database setup script:
   ```sql
   -- In MySQL command line or phpMyAdmin
   source o:\blog_apps\setup_database.sql
   ```
   Or manually create database:
   ```sql
   CREATE DATABASE blog_app_db;
   ```

### 2. Backend Setup (Spring Boot)
1. Navigate to backend directory:
   ```bash
   cd o:\blog_apps\blog_app\blog_app
   ```
2. Update database credentials in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```
3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   Backend will start on: http://localhost:8085

### 3. Frontend Setup (React)
1. Navigate to frontend directory:
   ```bash
   cd o:\blog_apps\blog-app-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   Frontend will start on: http://localhost:3000

### 4. Quick Start (Windows)
Run the startup script:
```bash
o:\blog_apps\start_blog_app.bat
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Categories
- `GET /api/categories/` - Get all categories
- `POST /api/categories/` - Create category (Auth required)
- `PUT /api/categories/{id}` - Update category (Auth required)
- `DELETE /api/categories/{id}` - Delete category (Auth required)

### Posts
- `GET /api/posts` - Get all posts (with pagination)
- `GET /api/posts/{id}` - Get single post
- `POST /api/user/{userId}/category/{categoryId}/posts` - Create post (Auth required)
- `PUT /api/posts/{id}` - Update post (Auth required)
- `DELETE /api/post/{id}` - Delete post (Auth required)

### Users
- `GET /api/users/` - Get all users (Auth required)
- `GET /api/users/{id}` - Get user by ID (Auth required)
- `PUT /api/users/{id}` - Update user (Auth required)

## Testing

### Manual Testing
1. Start both servers
2. Open http://localhost:3000
3. Register a new user
4. Login with credentials
5. Create categories and posts
6. Test all functionality

### Automated Testing
Run the test script:
```bash
cd o:\blog_apps
node test_endpoints.js
```

## Default Data

The application comes with pre-configured:
- Default roles (ADMIN, NORMAL)
- Sample categories (Technology, Lifestyle, Travel, Food, Health)

## Troubleshooting

### Common Issues:

1. **MySQL Connection Error**
   - Ensure MySQL server is running
   - Check database credentials in application.properties
   - Verify database `blog_app_db` exists

2. **CORS Errors**
   - Backend CORS is configured for all origins
   - Ensure backend is running on port 8085

3. **JWT Token Issues**
   - Tokens expire after 5 hours
   - Clear localStorage and login again if needed

4. **Port Conflicts**
   - Backend: Change port in application.properties
   - Frontend: Set PORT environment variable

### Logs
- Backend logs: Check console output
- Frontend logs: Check browser developer console
- Database logs: Check MySQL error logs

## Features

- User authentication with JWT
- Role-based access control
- CRUD operations for posts and categories
- Image upload for posts
- Pagination for posts
- Responsive design
- Real-time error handling

## Technology Stack

### Backend
- Spring Boot 3.5.3
- Spring Security
- Spring Data JPA
- MySQL
- JWT (JSON Web Tokens)
- Maven

### Frontend
- React 18
- React Router
- Axios
- Bootstrap/Reactstrap
- React Toastify

## Project Structure

```
blog_apps/
├── blog_app/blog_app/          # Spring Boot Backend
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
├── blog-app-main/              # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── start_blog_app.bat          # Startup script
├── test_endpoints.js           # API testing script
├── setup_database.sql          # Database setup
└── README.md                   # This file
```