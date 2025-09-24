import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_oiqafxp'; // Your EmailJS service ID
      const templateId = 'template_ojvk018'; // Your EmailJS template ID
      const publicKey = 'Vu-aHOGOiOejKPfbx'; // Your EmailJS public key

      // Prepare email data
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'paratwaj@gmail.com',
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        emailData,
        publicKey
      );

      // Success
      setAlertVariant('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Email send failed:', error);
      setAlertVariant('danger');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/paratwaj-e-5929b8343/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Paratwaj', label: 'GitHub' }
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's work together on your next project</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} className="mb-5" data-aos="fade-right" data-aos-delay="200">
            <div className="contact-info">
              <h4 className="mb-4">Let's Talk</h4>
              <p className="mb-4">
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-details">
                <div className="contact-item mb-3">
                  <Mail className="contact-icon me-3" size={20} />
                  <div>
                    <strong>Email</strong>
                    <p>paratwaj@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item mb-3">
                  <Phone className="contact-icon me-3" size={20} />
                  <div>
                    <strong>Phone</strong>
                    <p>+91 6369-4114-06</p>
                  </div>
                </div>
                
                <div className="contact-item mb-4">
                  <MapPin className="contact-icon me-3" size={20} />
                  <div>
                    <strong>Location</strong>
                    <p>Tirunelveli, India</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h5 className="mb-3">Follow Me</h5>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon me-3 social-icon-scale"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left" data-aos-delay="400">
            <div className="contact-form">
              <h4 className="mb-4">Send Message</h4>
              
              {showAlert && (
                <Alert variant={alertVariant} className="mb-4">
                  {alertVariant === 'success'
                    ? 'Thank you for your message! I\'ll get back to you soon.'
                    : 'Sorry, there was an error sending your message. Please try again or contact me directly at paratwaj@gmail.com.'
                  }
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project..."
                    className="form-control-custom"
                  />
                </Form.Group>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  className="w-100"
                  disabled={isLoading}
                >
                  <Send size={20} className="me-2" />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;