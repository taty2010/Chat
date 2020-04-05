import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';


const Join = () => {
  const [name, setName] = useState('hello');
  const [room, setRoom] = useState('');

  return(
    <div className='join'>
      <Container className='join-wrapper'>
        <Col className="align-self-center">
          <Row className="justify-content-md-center">
            <h1>Join</h1>
          </Row>
          <Form >
            <Row className="justify-content-md-center">
              <Form.Group controllId="name">
                <Form.Control placeholder="Name" type='text' onchange={(event) => setName(event.target.value) }/>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Form.Group controllId="room">
                <Form.Control placeholder="Room" type='text' onchange={(event) => setRoom(event.target.value)}/>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Link>
                <Button className="form btn btn-secondary" variant="primary" type='submit'>Sign In</Button>
              </Link>
            </Row>
          </Form>
        </Col>
      </Container>
    </div>
  )
};

export default Join;