import React,{ useState }  from "react";
import { Redirect, Router } from "@reach/router";
import "./App.css";
import Room from "./pages/Room";
import Login from "./pages/Login";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <Router>
      {/* Is logged in (Look for localStorage) ? */}
      {username ? (
        <Redirect from="/" to="rooms" noThrow />
      ) : (
        <Redirect from="/" to="login" noThrow />
      )}
      {/* Page routes */}
      <Login path="login" {...{ setUsername }} />
      {/* General room */}
      <Room path="rooms" />
      {/* Seperate rooms */}
      <Room path="room/:roomId" />
    </Router>
  );
}

export default App;
