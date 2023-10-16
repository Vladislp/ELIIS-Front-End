import React from 'react';
import Icon from '@mdi/react';
import { mdiBellCircle } from '@mdi/js';
import { mdiMessageText } from '@mdi/js';
import { mdiBullhorn } from '@mdi/js';
import { mdiCalendarBlank } from '@mdi/js';
import { mdiCloud } from '@mdi/js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../navbar/logo.png';
import './navbar.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-with-line">
      <Container fluid>
        <Row className="w-100 align-items-center">
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
          <Col xs={6} md={8}>
            <Navbar.Brand className="d-flex justify-content-end">
              <Icon path={mdiBellCircle} size={1.5} className="mx-2" />
              <Icon path={mdiBullhorn} size={1.5} className="mx-2" />
              <Icon path={mdiMessageText} size={1.5} className="mx-2" />
              <Icon path={mdiCalendarBlank} size={1.5} className="mx-2" />
              <Icon path={mdiCloud} size={1.5} className="mx-2" />
            </Navbar.Brand>
          </Col>
        </Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Navigation;
