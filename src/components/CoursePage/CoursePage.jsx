import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';

const CoursePage = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
      const query = '*[_type == "subject"]';
      client.fetch(query)
        .then((data) =>{
          setcourse(data);
          console.log(data);
        })
    }, []);
  
  
    return (
      <div className="app__coursepage">
        {course.map((courses, index) => (
            <div className="app__course-card">
                <img src={course.imgUrl} alt="" srcset="" />
            </div>
        ))}
      </div>
    
  )
}

export default CoursePage