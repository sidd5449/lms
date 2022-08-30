import './App.css';
import  { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseInfo from './pages/CourseInfo';
import Submission from './pages/Submission';
import SignUp from './pages/SignUp';
import Reset from './pages/Reset';



function App() {

  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element = {<HomePage />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<SignUp />} />
        <Route path='/reset-pass' element = {<Reset />} />
        <Route path='/courses' element = {<Courses />} />
        <Route path='/courses/:_id' element = {<CourseInfo/>} />
        <Route path='/courses/:_id/:_id' element = {<Submission />} />
      </Routes>
    </div>
  );
}

export default App;
