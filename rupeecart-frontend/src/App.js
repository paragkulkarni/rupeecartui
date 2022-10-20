import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/Register/Signup';
import NavBar from './components/Home/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';



function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
    // <Login />
  );
}

export default App;
