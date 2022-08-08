import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../client';
import Navbar from '../components/Navbar/Navbar';
import './CourseInfo.scss'

const CourseInfo = () => {
    const docId = useParams();
    const [subject, setsubject] = useState();
    // const apiUrl = `https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/`;
    // console.log(apiUrl);
    
    client.getDocument(docId._id).then((doc) => {
      setsubject(doc);

    });
    // const fetchSub = async () => {
    //     const {subData} =await axios.get(`https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/${docId._id}`)
    //     setsubjects(subData);  
    // };
    

    
    
    
  
    return (
    <div className="app__courseinfo">
        

        <Navbar />
        <div className="app__courseinfo-course">
          <p id='courseName'>{subject?.subjectName}</p>
          <p>Tutor: {subject?.subjectFac}</p>
          <div className="app__courseinfo-coursedesc">
            
          </div>
        </div>
    </div>
  )
}

export default CourseInfo