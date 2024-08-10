import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css'; 
import closeIcon from '../assets/img/closeIcon.svg'; 
import emailIcon from '../assets/img/emailIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import linkedinLogo from '../assets/img/linkedin-logo.png';

const Connect = ({ showConnectModal, handleConnectClose }) => {
  return (
    <div className="perspective-container">
      <div className="modal-content">
        <Modal show={showConnectModal} onHide={handleConnectClose} className="custom-modal">
          <Modal.Header>
            <Button className="custom-close-btn" onClick={handleConnectClose}>
              <img src={closeIcon} alt="Close" />
            </Button>
            <div className="modal-title-container">
            <Modal.Title>Let's Connect</Modal.Title>
            <img src="https://media.tenor.com/OBWnOrsAz9QAAAAi/light-bulb-idea.gif" alt="GIF" className="connect-gif" /></div>
          </Modal.Header>
          <Modal.Body>
            <div className="email-button-container">
              <Button
                variant="primary"
                className="email-button"
                href="mailto:zfausksa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={emailIcon} alt="Email" className="email-icon" />
                <span className="email-text">Email</span>
              </Button>
             
            </div><br/>
            <p>
              Hi there! I'm Zara Farrukh, a Computer Science major, specializing in Data Science and minoring in Math at Ontario Tech, Canada. I am a multiple-time recipient of Dean's Honor List and President's List as
              well as winner of the <a href="https://hackhive-otucs.devpost.com/HackHive" target="_blank">HackHive Hackathon</a> in collaboration with Microsoft, check out more on <a href="https://github.com/zarafarrukh" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={githubIcon} alt="GitHub" className="connect-github-icon" />
              </a> and connect with me on 
              <a href="https://www.linkedin.com/in/zarafarrukh/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={linkedinLogo} alt="LinkedIn" className="connect-linkedin-icon" />
              </a>. Outside of coding, you'll find me cooking, reading or socializing!
            </p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

Connect.propTypes = {
  showConnectModal: PropTypes.bool.isRequired,
  handleConnectClose: PropTypes.func.isRequired,
};

export default Connect;
