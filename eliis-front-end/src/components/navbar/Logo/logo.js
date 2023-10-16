// Logo.jsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from './logo.png';
import Col from 'react-bootstrap/Col';

const Logo = () => {
  return (
    <Col xs={6} md={4}>
      <Navbar.Brand>
        <img
          src={logoImage}
          alt="ELIIS"
          style={{
            maxWidth: '104px',
            height: 'auto',
            width: 'auto',
            height: 'auto',
            marginRight: '10em'
          }}
        />
      </Navbar.Brand>
    </Col>
  );
}

export default Logo;
