import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './message.scss'
const Message = ({message: {user, text}, name}) => {
  let CurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
    CurrentUser = true;
  }

  return (
    CurrentUser ? (
      <Row className="justify-content-center text-center">
        <Col md='3'>
          <p className='currentUser'>{trimmedName}</p>
        </Col>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    ) : (
      <Row className="justify-content-center text-center">
        <Col md='3'>
          <p className='user'>{user}</p>
        </Col>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    )
  )
}

export default Message;