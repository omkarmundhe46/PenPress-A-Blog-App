import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary-modern btn-modern position-fixed"
          style={{
            bottom: '30px',
            right: '30px',
            zIndex: 1000,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-lg)',
            border: 'none'
          }}
          title="Scroll to top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;