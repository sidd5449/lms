import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import CoursePage from '../components/CoursePage/CoursePage';
import './Courses.scss';

const Courses = () => {
  return (
    <div className="app__courses">
      <Navbar />
      <CoursePage />
    </div>
  )
}

export default Courses