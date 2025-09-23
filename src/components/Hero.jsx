import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title mb-3">
              Hi, I'm <span className="text-primary">Paratwaj E</span>
            </h1>
            <h2 className="hero-subtitle mb-4">Full Stack Developer</h2>
            <p className="hero-description mb-4">
              Passionate about creating amazing web experiences with modern technologies. 
              I turn ideas into reality through clean, efficient code.
            </p>
            <div className="hero-buttons">
              <Button
                variant="primary"
                size="lg"
                className="me-3 mb-2"
                href="/Resume%20-IT.pdf"
                target="_blank"
              >
                <Download size={20} className="me-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="mb-2"
                onClick={scrollToAbout}
              >
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="hero-img-container">
              <img 
                src="./public/images/Profile_photo.png" 
                alt="Developer" 
                className="img-fluid rounded-circle shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <ChevronDown size={30} className="bounce" />
      </div>
    </section>
  );
};

export default Hero;