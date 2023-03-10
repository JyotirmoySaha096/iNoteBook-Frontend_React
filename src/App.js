// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './contexts/NoteState';

function App() {
  return (
    <NoteState>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
