import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'HTML5', percentage: 95, color: '#e34c26' },
    { name: 'CSS3', percentage: 90, color: '#1572b6' },
    { name: 'JavaScript', percentage: 85, color: '#f7df1e' },
    { name: 'React', percentage: 88, color: '#61dafb' },
    { name: 'PHP', percentage: 80, color: '#777bb4' },
    { name: 'MySQL', percentage: 82, color: '#4479a1' },
    { name: 'Bootstrap', percentage: 92, color: '#7952b3' },
  ];

  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript','Bootstrap', 'React'];
  const backendSkills = ['PHP'];
  const databaseSkills = ['MySQL'];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => category.includes(skill.name));
  };

  const SkillCard = ({ skill }) => (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.percentage}%</span>
      </div>
      <ProgressBar
        now={skill.percentage}
        className="custom-progress"
        style={{ '--skill-color': skill.color }}
      />
    </div>
  );

  return (
    <section id="skills" className="skills-section py-5" data-aos="fade-up">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={4} className="mb-4" data-aos="fade-right" data-aos-delay="200">
            <div className="skills-category">
              <h4 className="category-title text-center mb-4">
                <span className="text-primary">Frontend</span> Development
              </h4>
              {getSkillsByCategory(frontendSkills).map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </Col>
          
          <Col lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="skills-category">
              <h4 className="category-title text-center mb-4">
                <span className="text-primary">Backend</span> Development
              </h4>
              {getSkillsByCategory(backendSkills).map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </Col>
          
          <Col lg={4} className="mb-4" data-aos="fade-left" data-aos-delay="400">
            <div className="skills-category">
              <h4 className="category-title text-center mb-4">
                <span className="text-primary">Database </span>Development & Tools
              </h4>
              {getSkillsByCategory(databaseSkills).map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
              <div className="other-skills mt-4" data-aos="fade-up" data-aos-delay="500">
                <h6 className="mb-3">Other Skills</h6>
                <div className="skill-tags">
                  {['Git','Github','Vercel','Netlify'].map((tag, index) => (
                    <span key={index} className="skill-tag tag-hover">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;