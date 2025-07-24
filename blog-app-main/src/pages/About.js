import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          {/* Hero Section */}
          <div className="hero-section" style={{ padding: '60px 0' }}>
            <Container>
              <div className="hero-content">
                <h1 className="hero-title" style={{ fontSize: '3rem' }}>About BlogSpace</h1>
                <p className="hero-subtitle">
                  Empowering writers and readers to connect, share, and grow together in a vibrant digital community.
                </p>
              </div>
            </Container>
          </div>

          {/* Mission Section */}
          <Container className="py-5">
            <Row className="align-items-center mb-5">
              <Col lg={6} className="mb-4">
                <h2 className="text-gradient fw-bold mb-4">Our Mission</h2>
                <p className="lead mb-4">
                  At BlogSpace, we believe every story deserves to be heard. We're building a platform where writers can share their thoughts, experiences, and creativity with a global audience.
                </p>
                <p className="text-muted mb-4">
                  Whether you're a seasoned writer or just starting your journey, BlogSpace provides the tools and community you need to grow your voice and connect with readers who share your interests.
                </p>
                {object.user.login ? (
                  <div className="d-flex align-items-center p-3 bg-light rounded">
                    <div className="bg-gradient rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{ width: '40px', height: '40px', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
                      {object.user.data?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <div>
                      <h6 className="mb-1">Welcome back, {object.user.data?.name}!</h6>
                      <p className="text-muted mb-0 small">Ready to share your next story?</p>
                    </div>
                  </div>
                ) : (
                  <Button tag={Link} to="/signup" className="btn-primary-modern btn-modern">
                    <i className="fas fa-user-plus me-2"></i>
                    Join Our Community
                  </Button>
                )}
              </Col>
              <Col lg={6}>
                <div className="modern-card p-4">
                  <div className="text-center">
                    <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                         style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-blog text-white" style={{ fontSize: '32px' }}></i>
                    </div>
                    <img src="/images/writer.png" alt="writer" width="80" className="mb-3" />
                    <h4 className="fw-bold mb-3">Built for Writers</h4>
                    <p className="text-muted">
                      Our platform is designed with writers in mind, offering intuitive tools for creating, editing, and sharing your content with the world.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Features Grid */}
            <Row className="mb-5">
              <Col lg={12} className="text-center mb-5">
                <h2 className="text-gradient fw-bold mb-3">What Makes Us Different</h2>
                <p className="text-muted lead">Features designed to enhance your writing and reading experience</p>
              </Col>
                
              <Col lg={3} md={6} className="mb-4">
                <div className="modern-card p-4 text-center h-100">
                  <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-feather-alt text-white"></i>
                  </div>
                  <img src="/images/Easy-writing.jpg" alt="Easy Writing" width="80" className="mb-3" />
                  <h5 className="fw-bold mb-2">Easy Writing</h5>
                  <p className="text-muted small mb-0">Intuitive editor with rich formatting options</p>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
                <div className="modern-card p-4 text-center h-100">
                  <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-comments text-white"></i>
                  </div>
                  <img src="/images/engage.png" alt="Engage" width="80" className="mb-3" />
                  <h5 className="fw-bold mb-2">Engage</h5>
                  
                  <p className="text-muted small mb-0">Comment and interact with other writers</p>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
                <div className="modern-card p-4 text-center h-100">
                  <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-tags text-white"></i>
                  </div>
                  <img src="/images/organize.png" alt="organize" width="80" className="mb-3" />
                  <h5 className="fw-bold mb-2">Organize</h5>
                  <p className="text-muted small mb-0">Categorize your posts for better discovery</p>
                </div>
              </Col>
              
              <Col lg={3} md={6} className="mb-4">
                <div className="modern-card p-4 text-center h-100">
                  <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '50px', height: '50px' }}>
                    <i className="fas fa-mobile-alt text-white"></i>
                  </div>
                  <img src="/images/mobile.png" alt="mobile-ready" width="80" className="mb-3" />
                  <h5 className="fw-bold mb-2">Mobile Ready</h5>
                  <p className="text-muted small mb-0">Write and read on any device, anywhere</p>
                </div>
              </Col>
            </Row>

            {/* Stats Section */}
            <Row className="text-center">
              <Col lg={12} className="mb-4">
                <h3 className="text-gradient fw-bold mb-4">Our Growing Community</h3>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="modern-card p-4">
                  <h2 className="text-gradient fw-bold mb-2">10K+</h2>
                  <p className="text-muted mb-0">Active Writers</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="modern-card p-4">
                  <h2 className="text-gradient fw-bold mb-2">50K+</h2>
                  <p className="text-muted mb-0">Published Stories</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="modern-card p-4">
                  <h2 className="text-gradient fw-bold mb-2">1M+</h2>
                  <p className="text-muted mb-0">Monthly Readers</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="modern-card p-4">
                  <h2 className="text-gradient fw-bold mb-2">25+</h2>
                  <p className="text-muted mb-0">Countries</p>
                </div>
              </Col>
            </Row>

            {/* CTA Section */}
            <Row className="mt-5">
              <Col lg={12} className="text-center">
                <div className="modern-card p-5">
                  <h3 className="fw-bold mb-3">Ready to Start Your Journey?</h3>
                  <p className="text-muted mb-4 lead">
                    Join thousands of writers who have already made BlogSpace their home for sharing stories.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Button tag={Link} to="/signup" className="btn-primary-modern btn-modern" size="lg">
                      <i className="fas fa-pen-fancy me-2"></i>
                      Start Writing Today
                    </Button>
                    <Button tag={Link} to="/" className="btn-outline-modern btn-modern" size="lg">
                      <i className="fas fa-book-open me-2"></i>
                      Explore Stories
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
