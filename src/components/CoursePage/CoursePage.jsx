import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import './CoursePage.scss';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CoursePage = () => {

  const [courses, setCourses] = useState([]);
  const [notices, setNotices] = useState([]);
  const [submissions, setSubmissions] = useState([]);


  useEffect(() => {
    const query = '*[_type == "subject"]';
    client.fetch(query)
      .then((data) =>{
        setCourses(data);
      })
  });
  useEffect(() => {
    const noticeQuery = '*[_type == "generalNotices"]';
    client.fetch(noticeQuery)
      .then((noticeData) =>{
        setNotices(noticeData);
        console.log(notices);
      })
  });
  useEffect(() => {
    const query = '*[_type == "submissions"]';
    client.fetch(query)
      .then((submissionData) =>{
        setSubmissions(submissionData);
      })
  });

  return (
    <div className="app__coursepage">
      <div className="app__coursepage-taglines">
        <p id='welcome'>Welcome back, <span>User!</span></p>
      </div>
      <h2>Your Courses</h2>
      <div className="app__coursepage-cards">
        
        {courses.map((course, index) => (
          <div className="app__coursepage-card">
            <img src={urlFor(course.imgUrl)} alt={course.subjectName} />
            <p id='subjectName'>{course.subjectName}</p>
            <p>{course.subjectFac}</p>

              <Link to={course._id} className='app__coursepage-link'>
                <FiArrowRightCircle
                  size={20}
                  color= 'var(--tertiary-color)'
                />
              </Link>

            
          </div>
        ))}
      </div>
      <div className="app__coursepage-notices">
        <div className="app__notices-wrapper">
          <h2>Notices</h2>
          {notices.map((notice, index) => (
            <div className="app__notice">
              
                <div className="bullet"></div>
              <div className="notice-wrap">  
                <p id='notice'>{notice.notice}</p>
                <p>{notice.date}</p>
              </div>
            </div>
          ))}  
        </div>
        <div className="app__upcoming">
            <h2>Upcoming Submissions</h2>
            {submissions.map((submission, index) => (
              <div className="app__upcoming-sub">
                <div className="app__upcoming-sub-title">
                  <h3>{submission.title}</h3>
                  <p>{submission.dueDate}</p>
                </div>
                <Link to='/' className='submit-btn'>
                  <button>
                    Submit Now
                  </button>
                </Link>
              </div>
            ))}
        </div>
        
      </div>
        

      
    </div>
  )
}

export default CoursePage
///change the order of notices in descending order of dates