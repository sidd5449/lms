import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Login from './Login';
import {client} from '../client';
import CoursePage from '../components/CoursePage/CoursePage';


const Courses = () => {
  
  // const [token, settoken] = useState();

  // if(!token){
  //   return <Login settoken = {settoken} />
  // }
  
  <>
    <Navbar />
    <CoursePage />
  
  </>
}

export default Courses