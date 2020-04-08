import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './message.scss'
import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
  let CurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
    CurrentUser = true;
  }

  return (
    <div>
    {CurrentUser ? (
      <Row className=" text-center chatMessage left">
        <Col className='text' md='4'>
          <p>{ReactEmoji.emojify(text)}</p>
        </Col>
        <Col md='3'>
          <p className='currentUser'>{trimmedName}</p>
        </Col>
      </Row>
    ) : (
      <Row className="text-center chatMessage">
        <Col md='3'>
          <p className='user'>{user}</p>
        </Col>
        <Col className='text' md='4'>
          <p>{ReactEmoji.emojify(text)}</p>
        </Col>
      </Row>
    )}
    </div>
  )
}

export default Message;