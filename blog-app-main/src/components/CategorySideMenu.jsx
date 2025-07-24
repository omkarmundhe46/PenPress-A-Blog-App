import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loadAllCategories } from '../services/category-service'

function CategorySideMenu() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(() => {
        loadAllCategories().then(data => {
            console.log('Categories API response:', data);
            setCategories([...data])
            setLoading(false)
        })
        .catch(error => {
            console.error('Categories API error:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
                toast.error(`Error loading categories: ${error.response.status}`);
            } else {
                toast.error("Cannot connect to server");
            }
            setLoading(false)
        })
    }, [])

    const isActive = (path) => {
        return location.pathname === path
    }

    if (loading) {
        return (
            <div className="category-menu">
                <div className="p-3 text-center">
                    <div className="loading-spinner mx-auto mb-2"></div>
                    <p className="mt-2 mb-0 text-muted small">Loading categories...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="category-menu">
            <Link 
                to="/" 
                className={`category-item ${isActive('/') ? 'active' : ''}`}
            >
                <i className="fas fa-home me-2"></i>
                All Posts
            </Link>
            
            {categories && categories.map((cat, index) => {
                const categoryPath = `/categories/${cat.categoryId}`
                return (
                    <Link 
                        key={index}
                        to={categoryPath}
                        className={`category-item ${isActive(categoryPath) ? 'active' : ''}`}
                    >
                        <i className="fas fa-tag me-2"></i>
                        {cat.categoryTitle}
                        <span className="ms-auto">
                            <i className="fas fa-chevron-right" style={{ fontSize: '0.75rem', opacity: 0.5 }}></i>
                        </span>
                    </Link>
                )
            })}
            
            {categories.length === 0 && (
                <div className="p-3 text-center text-muted">
                    <i className="fas fa-folder-open mb-2 animate-pulse" style={{ fontSize: '2rem', opacity: 0.3 }}></i>
                    <p className="mb-0 small">No categories available</p>
                </div>
            )}
        </div>
    )
}

export default CategorySideMenu