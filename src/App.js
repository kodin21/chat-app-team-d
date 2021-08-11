import './App.css';
import Login from './pages/Login';
import Room from './pages/Room';

function App() {
  return (
    <div className="AppBackground">
     {false&&<Room />}
     {<Login/>}
    </div>
  );
}

export default App;
