// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../components/img/png/2nd.png'; // Update the path according to your project structure
import './Header.css'; // Assuming custom styles are placed in Header.css

function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        expanded={isNavbarExpanded}
        className={`navbar ${navBackground ? 'navbar-scrolled' : 'navbar-top'} ${isSmallScreen ? 'navbar-small' : ''}`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Devi Temple Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link onClick={() => setIsNavbarExpanded(false)}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link onClick={() => setIsNavbarExpanded(false)}>About</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Festivals" id="basic-nav-dropdown">
                <LinkContainer to="/Durga Puja">
                  <NavDropdown.Item onClick={() => setIsNavbarExpanded(false)}>Durga Puja</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/Rath Yatra">
                  <NavDropdown.Item onClick={() => setIsNavbarExpanded(false)}>Jagannath Rath Yatra</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/contact">
                <Nav.Link onClick={() => setIsNavbarExpanded(false)}>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Placeholder for the space to push down */}
      <div className={`header-placeholder ${isNavbarExpanded ? 'header-expanded' : ''}`} />

      {/* Actual content with image */}
      <div className={`header-content ${isNavbarExpanded ? 'header-expanded' : ''}`}>
        {/* Your image component here */}

      </div>
    </div>
  );
}

export default Header;
