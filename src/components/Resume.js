import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css'; 
import closeIcon from '../assets/img/closeIcon.svg'; 

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
              <a href="https://drive.google.com/file/d/1TQCtXHueV-HctlqyLjM5ntgGNgpFM6g1/view" 
              target="_blank"
              frameborder="0" 
              allowfullscreen>
              Full view
              </a></li>
            </ul>
            
          </Modal.Header>
          <Modal.Body>

          <div class="iframe-container">
             <iframe src="https://drive.google.com/file/d/1TQCtXHueV-HctlqyLjM5ntgGNgpFM6g1/preview" width="500" height="500"></iframe><br/>
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
