const axios = require('axios');

const BASE_URL = 'http://localhost:8085';
let authToken = '';

// Test data
const testUser = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    about: 'This is a test user account'
};

const testCategory = {
    categoryTitle: 'Technology',
    categoryDescription: 'All about technology and innovation'
};

const testPost = {
    title: 'Test Post',
    content: 'This is a test post content',
    imageName: 'default.jpg'
};

// Helper function to make requests
async function makeRequest(method, url, data = null, headers = {}) {
    try {
        const config = {
            method,
            url: `${BASE_URL}${url}`,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };
        
        if (data) {
            config.data = data;
        }
        
        const response = await axios(config);
        return { success: true, data: response.data, status: response.status };
    } catch (error) {
        return { 
            success: false, 
            error: error.response?.data || error.message, 
            status: error.response?.status 
        };
    }
}

// Test functions
async function testRegister() {
    console.log('\n=== Testing User Registration ===');
    const result = await makeRequest('POST', '/api/v1/auth/register', testUser);
    console.log('Register Result:', result);
    return result;
}

async function testLogin() {
    console.log('\n=== Testing User Login ===');
    const loginData = {
        username: testUser.email,
        password: testUser.password
    };
    
    const result = await makeRequest('POST', '/api/v1/auth/login', loginData);
    console.log('Login Result:', result);
    
    if (result.success && result.data.token) {
        authToken = result.data.token;
        console.log('Auth token set:', authToken.substring(0, 20) + '...');
    }
    
    return result;
}

async function testGetCategories() {
    console.log('\n=== Testing Get Categories ===');
    const result = await makeRequest('GET', '/api/categories/');
    console.log('Get Categories Result:', result);
    return result;
}

async function testCreateCategory() {
    console.log('\n=== Testing Create Category ===');
    const result = await makeRequest('POST', '/api/categories/', testCategory, {
        'Authorization': `Bearer ${authToken}`
    });
    console.log('Create Category Result:', result);
    return result;
}

async function testGetPosts() {
    console.log('\n=== Testing Get Posts ===');
    const result = await makeRequest('GET', '/api/posts?pageNumber=0&pageSize=5');
    console.log('Get Posts Result:', result);
    return result;
}

async function testCreatePost(userId, categoryId) {
    console.log('\n=== Testing Create Post ===');
    const postData = {
        ...testPost,
        userId,
        categoryId
    };
    
    const result = await makeRequest('POST', `/api/user/${userId}/category/${categoryId}/posts`, postData, {
        'Authorization': `Bearer ${authToken}`
    });
    console.log('Create Post Result:', result);
    return result;
}

async function testCreateComment(postId) {
    console.log('\n=== Testing Create Comment ===');
    const commentData = {
        content: 'This is a test comment'
    };
    
    const result = await makeRequest('POST', `/api/post/${postId}/comments`, commentData, {
        'Authorization': `Bearer ${authToken}`
    });
    console.log('Create Comment Result:', result);
    return result;
}

async function testGetComments(postId) {
    console.log('\n=== Testing Get Comments ===');
    const result = await makeRequest('GET', `/api/post/${postId}/comments`);
    console.log('Get Comments Result:', result);
    return result;
}

async function testGetUsers() {
    console.log('\n=== Testing Get Users ===');
    const result = await makeRequest('GET', '/api/users/', null, {
        'Authorization': `Bearer ${authToken}`
    });
    console.log('Get Users Result:', result);
    return result;
}

// Main test function
async function runAllTests() {
    console.log('Starting Blog App API Tests...');
    console.log('Base URL:', BASE_URL);
    
    try {
        // Test registration
        const registerResult = await testRegister();
        
        // Test login
        const loginResult = await testLogin();
        
        // Test get categories (should work without auth)
        const categoriesResult = await testGetCategories();
        
        // Test create category (requires auth)
        const createCategoryResult = await testCreateCategory();
        let categoryId = createCategoryResult.success ? createCategoryResult.data.categoryId : 1;
        
        // Test get posts (should work without auth)
        const postsResult = await testGetPosts();
        
        // Test get users (requires auth)
        const usersResult = await testGetUsers();
        let userId = loginResult.success && loginResult.data.user ? loginResult.data.user.id : 1;
        
        // Test create post (requires auth)
        const createPostResult = await testCreatePost(userId, categoryId);
        let postId = createPostResult.success ? createPostResult.data.postId : 1;
        
        // Test create comment (requires auth)
        const createCommentResult = await testCreateComment(postId);
        
        // Test get comments (should work without auth)
        const getCommentsResult = await testGetComments(postId);
        
        // Summary
        console.log('\n=== TEST SUMMARY ===');
        console.log('Register:', registerResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Login:', loginResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Get Categories:', categoriesResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Create Category:', createCategoryResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Get Posts:', postsResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Get Users:', usersResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Create Post:', createPostResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Create Comment:', createCommentResult.success ? '✅ PASS' : '❌ FAIL');
        console.log('Get Comments:', getCommentsResult.success ? '✅ PASS' : '❌ FAIL');
        
    } catch (error) {
        console.error('Test execution error:', error);
    }
}

// Run tests
runAllTests();