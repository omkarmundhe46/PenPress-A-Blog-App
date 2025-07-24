import { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import CategorySideMenu from "../components/CategorySideMenu";
import NewFeed from "../components/NewFeed";

const Home = () => {
  return (
    <Base>
      {/* Enhanced Hero Section */}
      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <div className="mb-4">
              <div className="d-inline-flex align-items-center bg-white bg-opacity-10 rounded-pill px-4 py-2 mb-4">
                <i className="fas fa-fire text-warning me-2"></i>
                <span className="small fw-medium">Join 10,000+ Writers Worldwide</span>
              </div>
            </div>
            <h1 className="hero-title">Share Your Story with the World</h1>
            <p className="hero-subtitle">
              Discover amazing stories, share your thoughts, and connect with a vibrant community of passionate writers and readers. Your voice matters.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
              <Button 
                tag={Link} 
                to="/signup" 
                className="btn-primary-modern btn-modern"
                size="lg"
              >
                <i className="fas fa-pen-fancy me-2"></i>
                Start Writing
              </Button>
              <Button 
                tag={Link} 
                to="/about" 
                className="btn-outline-modern btn-modern"
                size="lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'white', color: 'white' }}
              >
                <i className="fas fa-info-circle me-2"></i>
                Learn More
              </Button>
            </div>
            
            {/* Stats Section */}
            <Row className="text-center mt-5">
              <Col md={4}>
                <div className="hero-stat">
                  <h3 className="fw-bold mb-1">10K+</h3>
                  <p className="mb-0 opacity-75">Active Writers</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="hero-stat">
                  <h3 className="fw-bold mb-1">50K+</h3>
                  <p className="mb-0 opacity-75">Stories Published</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="hero-stat">
                  <h3 className="fw-bold mb-1">1M+</h3>
                  <p className="mb-0 opacity-75">Monthly Readers</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={12} className="text-center mb-5">
            <h2 className="text-gradient fw-bold mb-3">Why Choose BlogSpace?</h2>
            <p className="text-muted lead">Everything you need to create, share, and grow your audience</p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
  <div className="modern-card p-4 text-center h-100">
    <img src="/images/editor.png" alt="Editor" width="60" className="mb-3" />
    <h5 className="fw-bold mb-2">Rich Editor</h5>
    <p className="text-muted mb-0">Write with our powerful editor featuring formatting, images, and more.</p>
  </div>
</Col>
<Col lg={4} md={6} className="mb-4">
  <div className="modern-card p-4 text-center h-100">
    <img src="/images/community.png" alt="Community" width="60" className="mb-3" />
    <h5 className="fw-bold mb-2">Community</h5>
    <p className="text-muted mb-0">Connect with like-minded writers and build your network.</p>
  </div>
</Col>
<Col lg={4} md={6} className="mb-4">
  <div className="modern-card p-4 text-center h-100">
    <img src="/images/analytics.png" alt="Analytics" width="60" className="mb-3" />
    <h5 className="fw-bold mb-2">Analytics</h5>
    <p className="text-muted mb-0">Track your post performance and grow your readership.</p>
  </div>
</Col>
        </Row>
      </Container>

      {/* Main Content */}
      <Container className="pb-5">
        <Row>
          <Col lg={3} md={4} className="mb-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="modern-card p-3 mb-4">
                <h5 className="text-gradient fw-bold mb-3">
                  <i className="fas fa-list me-2"></i>
                  Categories
                </h5>
                <CategorySideMenu />
              </div>
              
              {/* Trending Topics */}
              <div className="modern-card p-3">
                <h6 className="fw-bold mb-3">
                  <i className="fas fa-fire text-warning me-2"></i>
                  Trending Topics
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-light text-dark">#Technology</span>
                  <span className="badge bg-light text-dark">#Lifestyle</span>
                  <span className="badge bg-light text-dark">#Travel</span>
                  <span className="badge bg-light text-dark">#Food</span>
                  <span className="badge bg-light text-dark">#Health</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9} md={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="text-gradient fw-bold mb-1">
                  <i className="fas fa-newspaper me-2"></i>
                  Latest Stories
                </h2>
                <p className="text-muted mb-0">Discover fresh content from our community</p>
              </div>
              <div className="d-flex gap-2">
                <Button size="sm" className="btn-outline-modern btn-modern">
                  <i className="fas fa-filter me-1"></i>
                  Filter
                </Button>
              </div>
            </div>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
