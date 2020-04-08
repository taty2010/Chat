import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';

const App = () => {

  return(
  <Router>
    <Route exact path="/" render={(props) => (
       <Join {...props}/>
      )}/>
    <Route path="/chat" render={(props) => (
      <Chat {...props}/>
      )}/>
  </Router>
  )
}

export default App;