import './App.css';
import Login from './pages/Login';
import Room from './pages/Room';

function App() {
  return (
    <div className="AppBackground">
     {<Room />}
     {false&&<Login/>}
    </div>
  );
}

export default App;
