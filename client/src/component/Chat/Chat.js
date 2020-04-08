import React, { useState, useEffect } from 'react';
import './chat.scss'
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './infobar/Infobar';
import Input from './input/Input';
import Messages from './messages/Messages';
import RgbShift, {Rgb} from './RgbShift'

import {Form, Button, Container, Row, Col} from 'react-bootstrap';

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]); //Stores all messages
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState('');
  const [MainTheme, setMainTheme] = useState('main');
  const ENDPOINT = 'https://taty-chat-app.herokuapp.com/';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    
    setName(name);
    setRoom(room);

    socket.emit('join', {name, room}, (error) => {
      if(error) {
        alert(error)
      }
    });
    // console.log(socket)
      socket.emit('disconnect', {name, room}, (error) => {;

      socket.disconnect()
    })
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

  return(
    <div>
    <RgbShift/>
    <div className={`outerContainer ${MainTheme}`}>
      <Container fluid='sm'>
        <Row className="innerContainer">
          <Col className="chatArea">
            {/* <Row className="justify-content-md-center"> */}
              <InfoBar room={room}/>
              <Messages messages={messages} name={name}/>
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            {/* </Row> */}
          </Col>
          <Col md={2}>
            <h3>Users</h3>
            {Object.values(users).map((users) => (
                <p>{users.name}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
};

export default Chat;