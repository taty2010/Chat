import React, { useState, useEffect } from 'react';
import './chat.scss'
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './infobar/Infobar';
import Input from './input/Input';
import Messages from './messages/Messages';

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]); //Stores all messages
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('');
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

      socket.disconnect()
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    })
  }, [messages]);


  //Function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if(message){
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(users.name);
  return(
    <div className={`outerContainer ${MainTheme}`}>
      <Container fluid='sm'>
        <Row className="innerContainer">
          <Col>
            {/* <Row className="justify-content-md-center"> */}
              <InfoBar room={room}/>
              <Messages messages={messages} name={name}/>
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            {/* </Row> */}
          </Col>
          <Col md={2}>
            <h3>Users</h3>
            {Object.values(users).map((users) =>
              (<p>{users.name}</p>)
            )}
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