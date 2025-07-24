import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-gradient fw-bold mb-3">BlogSpace</h5>
            <p className="mb-3">
              A modern platform for sharing stories, ideas, and connecting with fellow writers and readers from around the world.
            </p>
            <div className="d-flex gap-3">

<a
  href="https://www.facebook.com/"
  className="text-decoration-none"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-facebook-f"></i>
</a>

<a
  href="https://x.com/"
  className="text-decoration-none"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-twitter"></i>
</a>

<a
  href="https://www.instagram.com/omkarrr__46/"
  className="text-decoration-none"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-instagram"></i>
</a>

<a
  href="https://www.linkedin.com/in/omkarmundhe/"
  className="text-decoration-none"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-linkedin-in"></i>
</a>

            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-decoration-none">
                <i className="fas fa-home me-2"></i>Home
              </Link>
              <Link to="/about" className="text-decoration-none">
                <i className="fas fa-info-circle me-2"></i>About
              </Link>
              <Link to="/services" className="text-decoration-none">
                <i className="fas fa-cogs me-2"></i>Services
              </Link>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/login" className="text-decoration-none">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </Link>
              <Link to="/signup" className="text-decoration-none">
                <i className="fas fa-user-plus me-2"></i>Sign Up
              </Link>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className="mb-3">Subscribe to get the latest posts and updates.</p>
            <div className="d-flex">
              <input 
                type="email" 
                className="form-control me-2" 
                placeholder="Enter your email"
                style={{ 
                  border: '1px solid #4a5568',
                  backgroundColor: 'transparent',
                  color: 'white'
                }}
              />
              <button className="btn btn-primary-modern btn-modern">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: '#4a5568', margin: '2rem 0 1rem' }} />
        
        <div className="footer-bottom">
          <Row className="align-items-center">
            <Col md={6}>
              <p className="mb-0">&copy; 2025 BlogSpace. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <a href="#" className="text-decoration-none">Privacy Policy</a>
                <a href="#" className="text-decoration-none">Terms of Service</a>
                <a href="#" className="text-decoration-none">Contact</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;