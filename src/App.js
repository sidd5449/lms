import './App.css';
import  { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dash from './pages/Dash';
import Login from './pages/Login';
import Courses from './pages/Courses';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='dashboard' element = {<Dash />} />
        <Route path='login' element = {<Login />} />
        <Route path='courses' element = {<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
