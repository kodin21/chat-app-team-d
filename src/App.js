import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Room from './pages/Room';
import Login from './pages/Login';


function App() {
  const [username, setUsername] = useState(null);
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          { username ? <Redirect to="/rooms" /> : <Login {...{setUsername} } />}
        </Route> 
        <Route path="/rooms" exact>
          <Redirect to="/room/general" />
        </Route>
        <Route path="/room/:roomId" exact>
          <Room />
        </Route>
        <Route path="*">
          <span>404</span>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
