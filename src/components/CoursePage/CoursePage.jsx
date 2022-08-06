import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';
import './CoursePage.scss';
import { FiArrowRight } from 'react-icons/fi';
import { Link, Route } from 'react-router-dom';

const CoursePage = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const query = '*[_type == "subject"]';
    client.fetch(query)
      .then((data) =>{
        setCourses(data);
      })
  }, [])

  return (
    <div className="app__coursepage">
      <div className="app__coursepage-taglines">
        <h2>Welcome back, User!</h2>
        <p>Let's get you started with your courses..</p>
      </div>
      <div className="app__coursepage-cards">
        {courses.map((course, index) => (
          <div className="app__coursepage-card">
            <img src={urlFor(course.imgUrl)} alt={course.subjectName} />
            <p>{course.subjectName}</p>
            <p>{course.subjectFac}</p>

              <Link to={course._id}>
                <FiArrowRight
                  size={20}
                  color= 'var(--secondary-color)'
                />
              </Link>

            
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default CoursePage