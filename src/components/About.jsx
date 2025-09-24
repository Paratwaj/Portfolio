import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <img 
              src="/images/Profile_photo.png" 
              alt="Profile" 
              className="profile-img img-fluid rounded-circle shadow-lg"
            />
          </Col>
          
          <Col lg={8}>
            <h3 className="mb-3">Hello! I'm a passionate Full Stack Developer</h3>
            <p className="mb-3">
              With over 1 years of experience in web development, I specialize in creating 
              modern, responsive web applications using cutting-edge technologies. I'm passionate 
              about writing clean, efficient code and staying up-to-date with the latest industry trends.
            </p>
            <p className="mb-4">
              I enjoy working on both front-end and back-end technologies, with expertise in 
              React, PHP, and database management. I'm always eager to take on new 
              challenges and contribute to innovative projects.
            </p>
            
            <Row>
              <Col sm={6}>
                <ul className="about-details">
                  <li><strong>Name:</strong> Paratwaj E</li>
                  <li><strong>Location:</strong> Tirunelveli, India</li>
                  <li><strong>Email:</strong> paratwaj@gmail.com</li>
                  <li><strong>Phone:</strong> +91 6369-4114-06</li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul className="about-details">
                  <li><strong>Experience:</strong> 1+ Years</li>
                  <li><strong>Languages:</strong> Tamil, English</li>
                  <li><strong>Freelance:</strong> Available</li>
                  <li><strong>Projects:</strong> 6+ Completed</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row>
          <Col lg={4} className="mb-4">
            <Card className="about-card h-100">
              <Card.Body className="text-center">
                <GraduationCap size={48} className="text-primary mb-3" />
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  <strong>Bachelor of Engineering (Mechanical Engineering)</strong><br />
                 Anna University Regional Campus Tirunelveli, Tirunelveli  (2018-2022)<br />
                  <small className="text-muted">CGPA: 7.66</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} className="mb-4">
            <Card className="about-card h-100">
              <Card.Body className="text-center">
                <Briefcase size={48} className="text-primary mb-3" />
                <Card.Title>Experience</Card.Title>
                <Card.Text>
                  <strong>Full Stack Developer</strong><br />
                  Roriri Software Solutions Pvt Limited (2024-Present)<br />
                  <small className="text-muted">Full Stack Development</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4} className="mb-4">
            <Card className="about-card h-100">
              <Card.Body className="text-center">
                <Award size={48} className="text-primary mb-3" />
                <Card.Title>Achievements</Card.Title>
                <Card.Text>
                  <strong>Certified Developer</strong><br />
                  Full Stack Developer & React Certifications<br />
                  <small className="text-muted">2024</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;