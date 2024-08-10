// NavBar.js
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import linkedinIcon from '../assets/img/linkedinIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import resumeIcon from '../assets/img/resumeIcon.svg';
import Connect from './Connect'; 
import Resume from './Resume';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showConnectModal, setShowConnectModal] = useState(false); //Let's Connect
    const [showResumeModal, setShowResumeModal] = useState(false); //View Resume

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleConnectShow = () => setShowConnectModal(true);
    const handleConnectClose = () => setShowConnectModal(false);

    const handleResumeShow = () => setShowResumeModal(true);
    const handleResumeClose = () => setShowResumeModal(false);

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a 
                                    href="https://www.linkedin.com/in/zarafarrukh/" 
                                    title="LinkedIn"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                                <a 
                                    href="https://github.com/zarafarrukh/" 
                                    title="GitHub"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src={githubIcon} alt="GitHub" />
                                </a>
                                <a 
                                    href="#" // placeholder URL to maintain button UI
                                    title="Resume"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleResumeShow(); // Trigger the modal
                                    }}
                                >
                                    <img src={resumeIcon} alt="Resume" />
                                </a>
                            </div>
                            <button className="vvd" onClick={handleConnectShow}>
                                <span>Let's Connect</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Connect Component */}
            <Connect showConnectModal={showConnectModal} handleConnectClose={handleConnectClose} />

            {/* Resume Component */}
            <Resume showResumeModal={showResumeModal} handleResumeClose={handleResumeClose} />
        </>
    );
}
