import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PantryPal from "../assets/img/PantryPal.jpg";
import PantryPalHover from "../assets/img/PantryPalHover.png";
import spamurai from "../assets/img/spamurai.png";
import spamuraiHover from "../assets/img/spamuraiHover.png";
import ChatLounge from "../assets/img/ChatLounge.jpg";
import ChatLoungeHover from "../assets/img/ChatLoungeHover.png";
import MusicandMentalHealth from "../assets/img/MusicandMentalHealth.png";
import MusicandMentalHealthHover from "../assets/img/MusicandMentalHealthHover.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "PantryPal",
      description: "(HackHive Hackathon Winner in collaboration with Microsoft). Cloud web app that takes in a list of ingredients and generates a list of delicious recipes using AI.",
      imgUrl: PantryPal,
      hoverImgUrl: PantryPalHover,
      githubLink: "https://github.com/zarafarrukh/PantryPal",
      category: "Web Dev"
    },
    {
      title: "Spamurai",
      description: "Spam Detection",
      imgUrl: spamurai,
      hoverImgUrl: spamuraiHover,
      githubLink: "https://github.com/zarafarrukh/Spamurai-Spam-Detector",
      category: "Data"
    },
    {
      title: "Chat Lounge",
      description: "Chat and Gaming Application",
      imgUrl: ChatLounge,
      hoverImgUrl: ChatLoungeHover,
      githubLink: "https://github.com/zarafarrukh/ChatLounge",
      category: "Web Dev"
    },
    {
      title: "Music and Mental Health",
      description: "Data Visualization",
      imgUrl: MusicandMentalHealth,
      hoverImgUrl: MusicandMentalHealthHover,
      githubLink: "https://github.com/zarafarrukh/Music-Taste-And-Mental-Health",
      category: "Data"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a selection of projects that showcase my skills in web development, data analysis, creative problem-solving, and more. I am continuously expanding and refining my portfolio!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard
                              imgUrl={project.imgUrl}
                              hoverImgUrl={project.hoverImgUrl}
                              title={project.title}
                              description={project.description}
                              githubLink={project.githubLink}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {projects.filter(project => project.category === "Web Dev").map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard
                              imgUrl={project.imgUrl}
                              hoverImgUrl={project.hoverImgUrl}
                              title={project.title}
                              description={project.description}
                              githubLink={project.githubLink}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                      <Row>
                        {projects.filter(project => project.category === "Data").map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard
                              imgUrl={project.imgUrl}
                              hoverImgUrl={project.hoverImgUrl}
                              title={project.title}
                              description={project.description}
                              githubLink={project.githubLink}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
