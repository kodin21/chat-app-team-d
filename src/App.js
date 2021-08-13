import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import Rooms from './pages/Rooms';
import Login from './pages/Login';

function App() {
  const [username, setUsername] = useLocalStorage("username", "");
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          { username ? <Redirect to="/rooms" /> : <Login {...{setUsername} } />}
        </Route> 
        <Route path="/login" exact>
          <Login {...{setUsername} } />
        </Route>
        <Route path="/rooms" exact>
          <Redirect to="/room/general" />
        </Route>
        <Route path="/room">
          <Rooms {...{userName: username}} />
        </Route>
        <Route path="*">
          <span>404</span>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
