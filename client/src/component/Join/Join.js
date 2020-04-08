import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './join.scss';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';


const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  // console.log(room)
  // console.log(name)

  return(
    <div className='join'>
      <Container className='join-wrapper'>
        <Col className="align-self-center">
          <Row className="justify-content-md-center">
            <h1>Join</h1>
          </Row>
          <Form onSubmit={event => (!name || !room) ? event.preventDefault() : props.history.push('/')} >
            <Row className="justify-content-md-center">
              <Form.Group controllid="name">
                <Form.Control placeholder="Name" type='text' onChange={(event) => setName(event.target.value) }/>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group controllid="room">
                <Form.Control placeholder="Room" type='text' onChange={(event) => setRoom(event.target.value)}/>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Link to={`/chat?name=${name}&room=${room}`}>
                <Button className="form btn btn-secondary" type='submit' variant="primary">
                  Sign In
                </Button>
              </Link>
            </Row>
          </Form>
        </Col>
      </Container>
    </div>
  )
};

export default Join;