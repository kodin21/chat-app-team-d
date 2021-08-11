import { useState } from "react";
import "./App.css";
import Room from "./pages/Room";
import Login from "./pages/Login";
import { Redirect, Router } from "@reach/router";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <div className="AppBackground">
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
    </div>
  );
}

export default App;
