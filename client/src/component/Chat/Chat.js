import React, { useState, useEffect } from 'react';
import './chat.scss'
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './infobar/Infobar';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]); //Stores all messages
  const [message, setMessage] = useState('');
  const [MainTheme, setMainTheme] = useState('main')
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, () => {

    });
    // console.log(socket)
    return () => {
      socket.emit('disconnect');

      socket.off()
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages]);

  //Function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);
  return(
    <div className={`outerContainer ${MainTheme}`}>
      <Container fluid='sm'>
        <Row className="innerContainer">
          <Col>
            {/* <Row className="justify-content-md-center"> */}
              <InfoBar room={room}/>
            {/* </Row> */}
            <Row className="justify-content-md-center">
              <Form>
                <input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
              </Form>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className='themesContainer'>
            <h3>Backgrounds</h3>
            <ul>
              <li className={MainTheme === 'main' ? 'activeTheme' : ''} onClick={() => setMainTheme('main')}>Main</li>
              <li className={MainTheme === 'mountain' ? 'activeTheme' : ''} onClick={() => setMainTheme('mountain')}>Mountain</li>
              <li className={MainTheme === 'galaxy' ? 'activeTheme' : ''}  onClick={() => setMainTheme('galaxy')}>Galaxy</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

  )
};

export default Chat;