import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css'; 
import closeIcon from '../assets/img/closeIcon.svg'; 
import emailIcon from '../assets/img/emailIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import linkedinLogo from '../assets/img/linkedin-logo.png';

const Resume = ({ showResumeModal, handleResumeClose }) => {
  return (
    <div className="perspective-container">
      <div className="modal-content">
        <Modal show={showResumeModal} onHide={handleResumeClose} className="resume-modal">
          <Modal.Header>
            <Button className="custom-close-btn" onClick={handleResumeClose}>
              <img src={closeIcon} alt="Close" />
            </Button>
            <div className="modal-title-container">
            <Modal.Title>Resume</Modal.Title>
            </div>

            <ul className="full-view">
              <li>
              <a href="https://drive.google.com/file/d/1DRYzy0B92wADEaaSIoilyvM4TRcS29cT/view" 
              target="_blank"
              frameborder="0" 
              allowfullscreen>
              Full view
              </a></li>
            </ul>
            
          </Modal.Header>
          <Modal.Body>

          <div class="iframe-container">
             <iframe src="https://drive.google.com/file/d/1DRYzy0B92wADEaaSIoilyvM4TRcS29cT/preview" width="500" height="500"></iframe><br/>
          </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

Resume.propTypes = {
  showResumeModal: PropTypes.bool.isRequired,
  handleResumeClose: PropTypes.func.isRequired,
};

export default Resume;
