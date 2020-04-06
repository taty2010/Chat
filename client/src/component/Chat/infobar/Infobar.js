import React from 'react';
import './infobar.scss';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const InfoBar = ({room}) => {

  return(
    // <Container fluid='xl' className='text-center infobar'>
      <Row className="justify-content-md-center text-center infobar">
        <Col className='leftContainer'>
          <i className='onlineIcon' className="fas fa-smile"></i>
        </Col>
        <Col className='middleContainer'>
          <h3>{room}</h3>
        </Col>
        <Col className='rightContainer'>
          <a href='/'><i className="fas fa-sign-out-alt"></i></a>
        </Col>
      </Row>
    // </Container>
  )
}

export default InfoBar;