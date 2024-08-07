import { Container, Row, Col } from "react-bootstrap";
import { Quiz } from "./Quiz";
import logo from "../assets/img/logo.svg";
import linkedinIcon from "../assets/img/linkedinIcon.svg";
import githubIcon from "../assets/img/githubIcon.svg";
import resumeIcon from "../assets/img/resumeIcon.svg";

export const Footer = () => {
  return (
    <footer className="footer"><br/>
      <Quiz/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/zarafarrukh/"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="https://github.com/zarafarrukh/"><img src={githubIcon} alt="GitHub" /></a>
              <a href="#"><img src={resumeIcon} alt="Resume" /></a>
            </div>
            <p>© 2024 Zara Farrukh. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}