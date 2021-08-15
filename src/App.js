import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import Rooms from './pages/Rooms';
import Login from './pages/Login';

function App() {
  const [clientUser, setClientUser] = useLocalStorage("user-data", "");
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          { clientUser ? <Redirect to="/rooms" /> : <Login {...{setClientUser} } />}
        </Route> 
        <Route path="/login" exact>
          <Login {...{setClientUser} } />
        </Route>
        <Route path="/rooms" exact>
          <Redirect to="/room/general" />
        </Route>
        <Route path="/room">
          <Rooms {...{clientUser}} />
        </Route>
        <Route path="*">
          <span>404</span>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
