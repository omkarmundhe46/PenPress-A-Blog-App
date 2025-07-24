import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";
import Base from "../components/Base";

const Services = () => {
    return (
        <userContext.Consumer>
            {
                (object) => (
                    <Base>
                        {/* Hero Section */}
                        <div className="hero-section" style={{ padding: '60px 0' }}>
                            <Container>
                                <div className="hero-content">
                                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Our Services</h1>
                                    <p className="hero-subtitle">
                                        Comprehensive tools and features to enhance your blogging experience and grow your audience.
                                    </p>
                                    {object.user.login && (
                                        <div className="glass-effect rounded p-3 d-inline-block">
                                            <span className="text-white">
                                                <i className="fas fa-user-check me-2"></i>
                                                Welcome back, {object.user.data?.name}!
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Container>
                        </div>

                        {/* Services Grid */}
                        <Container className="py-5">
                            <Row>
                                <Col lg={12} className="text-center mb-5">
                                    <h2 className="text-gradient fw-bold mb-3">What We Offer</h2>
                                    <p className="text-muted lead">Everything you need to create, manage, and grow your blog</p>
                                </Col>
                            </Row>

                            <Row className="mb-5">
                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-edit text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/editor.png" alt="editor" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Rich Text Editor</h4>
                                            <p className="text-muted mb-4">
                                                Write with our powerful WYSIWYG editor featuring formatting, images, links, and more advanced features.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Rich formatting options</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Image upload & embedding</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Code syntax highlighting</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Auto-save functionality</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-users text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/community.png" alt="community" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Community Features</h4>
                                            <p className="text-muted mb-4">
                                                Connect with other writers, engage with readers, and build your network in our vibrant community.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Comment system</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>User profiles</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Follow other writers</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Social sharing</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-chart-line text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/analytics.png" alt="analysis" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Analytics & Insights</h4>
                                            <p className="text-muted mb-4">
                                                Track your blog's performance with detailed analytics and insights to grow your audience.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>View statistics</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Reader engagement</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Popular content</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Growth metrics</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-tags text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/organize.png" alt="organize" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Content Organization</h4>
                                            <p className="text-muted mb-4">
                                                Organize your content with categories, tags, and advanced search to help readers find what they love.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Category management</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Tag system</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Search functionality</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Content filtering</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-mobile-alt text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/mobile.png" alt="mobile" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Mobile Responsive</h4>
                                            <p className="text-muted mb-4">
                                                Write and read on any device with our fully responsive design that works perfectly everywhere.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Mobile-first design</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Touch-friendly interface</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Fast loading</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Offline reading</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} className="mb-4">
                                    <div className="modern-card p-4 h-100 hover-lift">
                                        <div className="text-center mb-4">
                                            <div className="bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                                                 style={{ width: '70px', height: '70px' }}>
                                                <i className="fas fa-shield-alt text-white" style={{ fontSize: '28px' }}></i>
                                            </div>
                                            <img src="/images/security.png" alt="security" width="80" className="mb-3" />
                                            <h4 className="fw-bold mb-3">Security & Privacy</h4>
                                            <p className="text-muted mb-4">
                                                Your content and data are protected with enterprise-grade security and privacy controls.
                                            </p>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Secure authentication</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Data encryption</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Privacy controls</li>
                                            <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Regular backups</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                            {/* CTA Section */}
                            <Row className="mt-5">
                                <Col lg={12}>
                                    <div className="modern-card p-5 text-center">
                                        <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
                                        <p className="text-muted mb-4 lead">
                                            Join thousands of writers who are already using BlogSpace to share their stories with the world.
                                        </p>
                                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                                            {!object.user.login ? (
                                                <>
                                                    <Button tag={Link} to="/signup" className="btn-primary-modern btn-modern" size="lg">
                                                        <i className="fas fa-user-plus me-2"></i>
                                                        Create Free Account
                                                    </Button>
                                                    <Button tag={Link} to="/" className="btn-outline-modern btn-modern" size="lg">
                                                        <i className="fas fa-book-open me-2"></i>
                                                        Explore Posts
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button tag={Link} to="/user/dashboard" className="btn-primary-modern btn-modern" size="lg">
                                                        <i className="fas fa-tachometer-alt me-2"></i>
                                                        Go to Dashboard
                                                    </Button>
                                                    <Button tag={Link} to="/" className="btn-outline-modern btn-modern" size="lg">
                                                        <i className="fas fa-home me-2"></i>
                                                        Back to Home
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Base>
                )
            }
        </userContext.Consumer>
    )
}

export default Services