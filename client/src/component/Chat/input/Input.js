import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import './input.scss';

const Import = ({message, setMessage, sendMessage}) => {

  return(
    <Row className="justify-content-md-center text-center">
      <Col>
        <Form className='input' onSubmit={(event) => sendMessage(event)}>
          <input 
            className='input'
            type='text'
            placeholder='Send a message...'
            value={message} 
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          />
          <Button className="input form btn btn-secondary" type='submit'>Send</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Import;