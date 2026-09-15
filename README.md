# ✍️ PenPress — Full-Stack Blog Application

PenPress is a full-stack blogging platform built with a **React 18 frontend** and a **Spring Boot REST backend**. It provides user authentication, blog publishing, categories, image uploads, comments, pagination, profile management, and protected user routes.

The repository is organized around a React client in `blog-app-main` and a separate Spring Boot backend referenced by the frontend at `http://localhost:8085`.

## ✨ Features

### 👤 Authentication & Users

- User registration and login
- JWT-based authentication
- Authenticated user information stored on the client
- Protected routes for dashboard, profile, and blog editing
- Logout support
- Role-aware backend security

### 📝 Blog Management

- Create blog posts
- Update existing posts
- Delete posts
- Rich-text editing with **Jodit Editor**
- Post banner image upload
- User-wise post listing
- Category-wise post listing
- Individual post details
- Paginated post feed

### 🗂️ Categories

- Load available categories
- Create posts under selected categories
- Browse posts by category
- Category sidebar/navigation support

### 💬 Comments

- Add comments to posts
- View comments for a post
- Delete comments through authenticated requests

### 🎨 Frontend Experience

- Responsive UI using **Bootstrap 5** and **Reactstrap**
- React Router based navigation
- Toast notifications with React Toastify
- Infinite-scroll/feed-oriented components
- Reusable components for navbar, footer, posts, categories, editor and private routes

## 🏗️ Architecture

```text
┌────────────────────────────────────────────┐
│              React Frontend                │
│              React 18 + JS                 │
│                                            │
│  Pages / Components / Context / Services  │
└──────────────────────┬─────────────────────┘
                       │ Axios / HTTP
                       │
                       ▼
┌────────────────────────────────────────────┐
│         Spring Boot REST Backend           │
│                Port 8085                   │
│                                            │
│  Auth • Users • Posts • Categories         │
│  Comments • Image Upload • Security        │
└──────────────────────┬─────────────────────┘
                       │
                       ▼
                 MySQL Database
```

The frontend uses two Axios clients: a public client for open endpoints and a private client that attaches the JWT as a `Bearer` token before authenticated requests. fileciteturn57file0

## 🧰 Technology Stack

### Frontend

- **React 18**
- **React Router DOM 6**
- **Axios**
- **Bootstrap 5**
- **Reactstrap**
- **Jodit React** rich-text editor
- **React Toastify**
- **React Infinite Scroll Component**
- React Testing Library
- Create React App / `react-scripts`

The frontend dependency list and scripts are defined in `blog-app-main/package.json`. fileciteturn46file0

### Backend

Based on the repository's implementation notes, the backend uses:

- **Spring Boot**
- **Spring Security**
- **JWT authentication**
- **REST APIs**
- **MySQL**
- **CORS configuration**

The documented backend port is **8085**. fileciteturn49file0

## 📁 Project Structure

```text
PenPress-A-Blog-App/
│
├── README.md
├── ISSUES_FIXED.md
│
└── blog-app-main/
    ├── package.json
    ├── package-lock.json
    ├── public/
    │   └── images/
    └── src/
        ├── App.js
        ├── App.css
        ├── auth/
        │   └── index.js
        ├── components/
        │   ├── AddPost.jsx
        │   ├── CategorySideMenu.jsx
        │   ├── CustomNavbar.jsx
        │   ├── Footer.jsx
        │   ├── NewFeed.jsx
        │   ├── Post.jsx
        │   ├── Privateroute.jsx
        │   └── ScrollToTop.jsx
        ├── context/
        │   └── UserProvider / user context
        ├── pages/
        │   ├── Home
        │   ├── Login
        │   ├── Signup
        │   ├── About
        │   ├── Services
        │   ├── PostPage
        │   ├── Categories
        │   ├── UpdateBlog
        │   └── user-routes/
        └── services/
            ├── helper.js
            ├── user-service.js
            ├── category-service.js
            ├── post-service.js
            └── comment-service.js
```

The route configuration confirms public pages such as home, login, signup, about, services, individual posts and categories, with dashboard/profile/update-blog routes protected behind `Privateroute`. fileciteturn48file0

## 🔐 Authentication Flow

1. User registers using `/api/v1/auth/register`.
2. User logs in through `/api/v1/auth/login`.
3. The backend returns authentication data including a JWT and user information.
4. The frontend stores this response in `localStorage` under `data`.
5. The private Axios client reads the stored token and sends it as:

```http
Authorization: Bearer <JWT_TOKEN>
```

6. Protected React routes use the login state to allow or redirect users. fileciteturn51file0 fileciteturn50file0

## 🔌 API Endpoints Used by the Frontend

The frontend service layer currently communicates with endpoints including:

| Feature | Method | Endpoint |
|---|---|---|
| Register | POST | `/api/v1/auth/register` |
| Login | POST | `/api/v1/auth/login` |
| Get user | GET | `/api/users/{userId}` |
| Get categories | GET | `/api/categories/` |
| Get all posts | GET | `/api/posts?pageNumber={page}&pageSize={size}&sortBy=postId` |
| Get single post | GET | `/api/posts/{postId}` |
| Create post | POST | `/api/user/{userId}/category/{categoryId}/posts` |
| Upload post image | POST | `/api/post/image/upload/{postId}` |
| Category posts | GET | `/api/category/{categoryId}/posts` |
| User posts | GET | `/api/user/{userId}/posts` |
| Update post | PUT | `/api/posts/{postId}` |
| Delete post | DELETE | `/api/post/{postId}` |
| Create comment | POST | `/api/post/{postId}/comments` |
| Get comments | GET | `/api/post/{postId}/comments` |
| Delete comment | DELETE | `/api/comments/{commentId}` |

These routes are reflected directly in the React service layer. fileciteturn54file0 fileciteturn55file0 fileciteturn56file0 fileciteturn60file0

## 📝 Create Blog Flow

The post creation component loads categories, captures the title and rich-text content, accepts an optional banner image, and submits the post with the authenticated user's ID and selected category. fileciteturn53file0

```text
Login
  ↓
User Dashboard
  ↓
Create Post
  ↓
Enter Title + Rich Content
  ↓
Select Category + Banner Image
  ↓
POST /api/user/{userId}/category/{categoryId}/posts
  ↓
Upload Banner Image
  ↓
Published Blog
```

## 🚀 Getting Started

### Prerequisites

Install:

- **Java 17+ / Java version compatible with the backend project**
- **Maven**
- **Node.js and npm**
- **MySQL**

The repository's issue/fix notes document the tested setup with the backend on port `8085`, MySQL database `blog_app_db`, and frontend on port `3000`. fileciteturn49file0

### 1. Clone the repository

```bash
git clone https://github.com/omkarmundhe46/PenPress-A-Blog-App.git
cd PenPress-A-Blog-App
```

### 2. Configure MySQL

Create the application database according to the backend configuration. The documented local database is:

```text
blog_app_db
```

A database setup script is also referenced in the repository's implementation notes. fileciteturn49file0

### 3. Start the backend

Open the Spring Boot backend project and run:

```bash
mvn spring-boot:run
```

The documented backend URL is:

```text
http://localhost:8085
```

### 4. Start the React frontend

```bash
cd blog-app-main
npm install
npm start
```

The frontend runs on the Create React App development server, typically:

```text
http://localhost:3000
```

The current Axios base URL is hard-coded to `http://localhost:8085`. fileciteturn57file0

## 🧪 Testing

The repository notes report a successful backend compile and successful frontend dependency installation. An API testing script is also referenced as part of the project's troubleshooting/testing workflow. fileciteturn49file0

For frontend tests:

```bash
npm test
```

For a production frontend build:

```bash
npm run build
```

## 🛡️ Implementation Notes

- The frontend uses **localStorage** for the JWT response and current user information. fileciteturn51file0
- Authenticated API requests are centralized through the private Axios interceptor. fileciteturn57file0
- Protected client-side routes redirect unauthenticated users to `/login`. fileciteturn50file0
- The application includes CORS handling in the backend according to the repository's documented fixes. fileciteturn49file0
- The current frontend API URL is environment-specific and should be externalized before deployment.

## 🔒 Production Recommendations

For production deployment, consider:

1. Move the backend API URL into a React environment variable such as `REACT_APP_API_BASE_URL`.
2. Store JWT signing secrets and database credentials only in server-side environment variables or a secrets manager.
3. Restrict CORS to the deployed frontend domain instead of broad development settings.
4. Add validation for uploaded image type and size.
5. Configure refresh-token/session strategy instead of relying only on a long-lived access token.
6. Add backend integration tests for authentication, post ownership, comments and image uploads.
7. Add API documentation with OpenAPI/Swagger.
8. Containerize frontend and backend and add CI/CD.
9. Add database indexes for frequently queried post/category/user fields.
10. Add centralized error handling and structured application logging.

## 📌 Project Status

The repository includes documented fixes for build configuration, CORS, JWT login responses, role constants, missing categories, frontend login error handling, database setup, and API testing. fileciteturn49file0

## 👨‍💻 Author

**Omkar Mundhe**

Java Backend / Full-Stack Developer

- GitHub: [@omkarmundhe46](https://github.com/omkarmundhe46)
- Project: [PenPress — A Blog App](https://github.com/omkarmundhe46/PenPress-A-Blog-App)

---

> **Write. Share. Connect. 🚀**
