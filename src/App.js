import './App.css';
import  { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseInfo from './pages/CourseInfo';
import Submission from './pages/Submission';
import SignUp from './pages/SignUp';
import Reset from './pages/Reset';
import { AuthContextProvider } from './utils/authContext';
import ProtectedRoute from './utils/protectedRoute';



function App() {

  return (
    <div className="App">
      <AuthContextProvider>

      <Routes>
        
        <Route path='/' element = {<HomePage />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<SignUp />} />
        <Route path='/reset-pass' element = {<Reset />} />
        <Route path='/courses' element = {<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path='/courses/:_id' element = {<ProtectedRoute><CourseInfo /></ProtectedRoute>} />
        <Route path='/courses/:_id/:_id' element = {<ProtectedRoute><Submission /></ProtectedRoute>} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
