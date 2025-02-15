// Banner.js
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ZaraFarrukh_Picture from "../assets/img/ZaraFarrukh_Picture2.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Connect from './Connect';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Development", "AI and Data Science", "Machine Learning" ];
  const period = 1000;
  const [showConnectModal, setConnectShowModal] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const handleConnectShow = () => setConnectShowModal(true);
  const handleConnectClose = () => setConnectShowModal(false);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1><span className="introduction">{`Hi, I'm Zara `}<br /></span>
                <span className="txt-rotate" data-period="500" data-rotate='[ "Software Development", "AI and Data Science", "Machine Learning" ]'><span className="wrap">{text}</span></span></h1>
                <div className="banner-text"><p>I am currently pursuing a Computer Science degree with specialization in Data Science. My interests span AI, software development, and machine learning. 
                    I'm always eager to connect and explore innovative opportunities and collaborations.</p></div>
                  <button onClick={handleConnectShow}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={ZaraFarrukh_Picture} alt="Header Img" className="profile-image"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Use Connect */}
      <Connect showConnectModal={showConnectModal} handleConnectClose={handleConnectClose} />
    </section>
  );
}
