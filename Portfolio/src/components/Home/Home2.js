import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span> 
            </h1>
            <p className="home-about-body">
            With a background in Computer Engineering,I have honed my skills across the full spectrum of software development. 
              <br />
              <br />I am fluent in classic technologies such as
              <i>
                <b className="purple"> HTML, CSS, Javascript, MERN STACK. </b>
              </i>
              <br />
              <br />
              My fields of interest include building new  &nbsp;  
              <i>
                <b className="purple">Web Technologies &nbsp; </b> and
                also in areas related to&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <b className="purple">
                Data Analyst and Bug Finding.
                </b>
              </i>
              <br />
              <br />
              My expertise spans front-end development, database management, and cloud integration. My journey as a developer is fueled
                 by a relentless curiosity and a commitment to continuous learning in this ever-evolving field.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dhyeykhanpara21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhyeykhanpara2112004/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
