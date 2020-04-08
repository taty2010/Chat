import React from 'react';
import './infobar.scss';
import {Row, Col} from 'react-bootstrap';

const InfoBar = ({room}) => {

  return(
    // <Container fluid='xl' className='text-center infobar'>
      <Row className="justify-content-md-center text-center infobar">
        <Col className='leftContainer'>
          <i className="fas fa-smile onlineIcon"></i>
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