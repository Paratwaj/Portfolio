import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Canteen System',
      shortDescription: 'Modern canteen management system with online ordering',
      description: 'A comprehensive smart canteen system built with modern web technologies. Features include menu management, online ordering, inventory tracking, and admin dashboard for efficient canteen operations.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React', 'Node.js', 'Postgresql', 'Express', 'Bootstrap','Tailwind CSS','JavaScript','HTML','CSS'],
      githubUrl: '#',
      demoUrl: 'https://canteen-app-alpha.vercel.app/',
      features: ['Online Ordering', 'Menu Management', 'Inventory Tracking', 'User Authentication', 'Admin Dashboard']
    },
    {
      id: 2,
      title: 'Visitor Registration System',
      shortDescription: 'Digital visitor management solution',
      description: 'A modern visitor registration system for efficient visitor management. Features include visitor check-in/check-out, host notifications, visitor history, and security management.',
      image: 'https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg?auto=compress&cs=tinysrgb&w=600',
      techStack: ['React', 'HTML', 'Tailwind CSS', 'Node.js','Express','Postgresql','Vercel'],
      githubUrl: '#',
      demoUrl: 'https://visitor-registration-chi.vercel.app/',
      features: ['Visitor Check-in/Check-out', 'Host Notifications', 'Visitor History', 'Security Management', 'Digital Registration']
    },
    {
      id: 3,
      title: 'Inventory Management System',
      shortDescription: 'Complete inventory tracking solution',
      description: 'A comprehensive inventory management system for tracking products, stock levels, and orders. Features include real-time inventory updates, reporting, and analytics.',
      image: 'https://media.istockphoto.com/id/2234685961/photo/businessman-selecting-digital-approval-checkmark-on-virtual-screen-with-document-icons.jpg?s=612x612&w=0&k=20&c=7FZ8lCzsBzNMUrti0gQk3U26joGjm3tN7Q5g4tEKnWI=',
      techStack: ['Html', 'CSS', 'Javascript', 'MySQL', 'PHP', 'Bootstrap'],
      githubUrl: '#',
      demoUrl: 'https://kings.roririsoft.com',
      features: ['Real-time Stock Tracking', 'Order Management', 'Inventory Reports', 'Product Catalog', 'Analytics Dashboard']
    },
    {
      id: 4,
      title: 'Roriri Software Solutions',
      shortDescription: 'Company website and service showcase',
      description: 'A professional company website showcasing services, portfolio, and business information. Built with modern web technologies and optimized for business presentation.',
      image: 'https://media.istockphoto.com/id/1351571961/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.jpg?s=612x612&w=0&k=20&c=4J_aWJc5gMATCtIbMkF0dMq4dzz_XjLx5DpwnuPJwkg=',
      techStack: ['React', 'HTML','Javascript', 'Tailwind CSS', 'Vercel'],
      githubUrl: '#',
      demoUrl: 'https://rss-website-swart.vercel.app/',
      features: ['Service Showcase', 'Company Portfolio', 'Contact Integration', 'Responsive Design', 'SEO Optimized']
    },
    {
      id: 5,
      title: 'Sridevi Snacks',
      shortDescription: 'Food business website and ordering platform',
      description: 'A dedicated website for Sridevi Snacks featuring menu showcase, online ordering capabilities, and business information presentation.',
      image: 'https://media.istockphoto.com/id/1149135424/photo/group-of-sweet-and-salty-snacks-perfect-for-binge-watching.jpg?s=612x612&w=0&k=20&c=YAVqRyUJgj_nXpltYUPpaW_PYtd4v2TC5Mo0DtVFuoo=',
      techStack: ['React', 'HTML','Node js', 'Tailwind CSS','Postgresql', 'Vercel'],
      githubUrl: '#',
      demoUrl: 'https://sridevisnacks.vercel.app',
      features: ['Menu Display', 'Online Ordering', 'Business Information', 'Contact Details', 'Responsive Design']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      shortDescription: 'Personal portfolio and project showcase',
      description: 'A professional portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance and SEO.',
      image: 'https://media.istockphoto.com/id/2177131480/photo/businessman-hands-with-light-bulb-of-inspiration-bright-idea-and-creative-thinking-energetic.jpg?s=612x612&w=0&k=20&c=F4m3vp09RFrmB8ANBH3oNM48OzYjvrFrviWqwgXtgy0=',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap','Netlify'],
      githubUrl: '#',
      demoUrl: 'https://portfolioparath.netlify.app/',
      features: ['Project Showcase', 'Skills Display', 'Contact Information', 'Responsive Design', 'Modern UI/UX']
    }
  ];

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="project-card h-100 card-hover">
                <div className="project-image-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <Button 
                      variant="primary" 
                      className="me-2"
                      onClick={() => handleShowProject(project)}
                    >
                      <Eye size={16} className="me-1" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.shortDescription}
                  </Card.Text>
                  
                  <div className="tech-stack mb-3">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tech-tag more">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
                    {/* <Button 
                      variant="outline-primary" 
                      size="sm" 
                      href={project.githubUrl}
                      target="_blank"
                      className="me-2"
                    >
                      <Github size={16} className="me-1" />
                      Code
                    </Button> */}
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.demoUrl}
                      target="_blank"
                    >
                      <ExternalLink size={16} className="me-1" />
                       
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject['title']}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedProject['image']} 
                alt={selectedProject['title']}
                className="img-fluid mb-3 rounded"
              />
              <p>{selectedProject['description']}</p>
              
              <h6>Key Features:</h6>
              <ul>
                {selectedProject['features'].map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h6>Technologies Used:</h6>
              <div className="tech-stack-modal">
                {selectedProject['techStack'].map((tech, index) => (
                  <span key={index} className="tech-tag-modal">{tech}</span>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button 
                variant="outline-primary"
                href={selectedProject['githubUrl']}
                target="_blank"
              >
                <Github size={16} className="me-1" />
                View Code
              </Button> */}
              <Button 
                variant="primary"
                href={selectedProject['demoUrl']}
                target="_blank"
              >
                <ExternalLink size={16} className="me-1" />
                
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;