import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './Messages.scss';
import Message from './message/message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({messages, name}) => {

  return(
    <ScrollToBottom>
      <Row className="chatBox">
          {messages.map((message, i) => (
          <div key={i}><Message message={message} name={name} /></div>
        ))}
      </Row>
    </ScrollToBottom>
  )
}

export default Messages;