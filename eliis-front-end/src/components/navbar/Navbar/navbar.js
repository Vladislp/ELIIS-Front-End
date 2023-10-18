import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logo from '../Logo/logo';
import NavItems from './navbarItems';
import Personal from './Profile/personal';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-with-line" style={{ borderBottom: '1px solid #ccc' }}>
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Logo />
          <NavItems />
        </Row>
        <div className="hidden md:block py-3 bg-gray-300 h-9 w-full"></div>
        <Personal />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigation;
