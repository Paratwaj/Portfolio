import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <p className="mb-0">
              © {currentYear} Copyright Paratwaj, <Heart size={16} className="text-danger mx-1" /> 
             ALl rights reserved.
            </p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <button 
              className="scroll-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;