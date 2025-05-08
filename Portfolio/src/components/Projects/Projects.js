import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/luphonix.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Luphonix"
              description="LUPHONIX is a software company dedicated to providing tailored technology solutions based on client-specific requirements. We specialize in building scalable, user-friendly, and efficient digital solutions—from custom web platforms to backend systems—ensuring our clients achieve their goals with precision and innovation"
              ghLink="https://github.com/dhyeykhanpara21/Suchi_Tracker"
              demoLink="https://luphonix-prime.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Nixkart"
              description="NixKart is our in-house eCommerce platform built under the LUPHONIX umbrella. It offers users a seamless online shopping experience with features like secure checkout, responsive design, admin controls, and fast product browsing—developed to ensure simplicity and reliability."
              ghLink="https://github.com/dhyeykhanpara21/Jarvis-in-Javascript-main-main"
              demoLink="https://nixkart.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blogs"
              description="LUPHONIX Blog is the official content hub where we share tutorials, updates, and thought leadership pieces on software trends, technologies, and company progress. It serves as a gateway to engage with the tech community and share what we learn."
              ghLink="https://github.com/dhyeykhanpara21"
              demoLink="https://github.com/dhyeykhanpara21"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Suchi Tracker"
              description="Suchi Tracker is a custom-built inventory and sales management system developed for government-led Aanganwadi programs. With support for role-based dashboards, real-time stock updates, and monthly reports, it ensures smooth tracking and accountability across different user types."
              ghLink="https://github.com/dhyeykhanpara21"
              demoLink="https://github.com/dhyeykhanpara21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Prithvi Sahay"
              description="Prithvi Sahay is an IoT-powered farming car designed to automate essential agricultural tasks. By integrating smart sensors and remote monitoring, it helps farmers track soil conditions, crop health, and environmental factors, reducing manual labor and improving efficiency."
              ghLink="https://github.com/dhyeykhanpara21"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="@@@@@@@"
              description="COMING SOON"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
