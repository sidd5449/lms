import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../client';
import Navbar from '../components/Navbar/Navbar';
import './CourseInfo.scss'

const CourseInfo = () => {
    const docId = useParams();
    const [subject, setsubject] = useState([]);
    const [subArray, setsubArray] = useState([]);
    // const apiUrl = `https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/`;
    // console.log(apiUrl);
    
    useEffect(() => {
      const query = `*[_id == "${docId._id}"]`;
      client.fetch(query)
        .then((subjectDatabyID) =>{
          setsubject(subjectDatabyID);
        })
        console.log(subject);
    });
    useEffect(() => {
      const subQuery = `*[_id == "${docId._id}"]{subjectAssignment[]}`;
      client.fetch(subQuery)
        .then((subArrayData) =>{
          setsubArray(subArrayData);
        })
        console.log(subArray);
    });
    
    
    

    
    
    
  
    return (
    <div className="app__courseinfo">
        

        <Navbar />
        <div className="app__courseinfo-course">
            {subject.map((subjectItem) => (
              <div className="app__courseinfo-title">
                <p id='courseName'>{subjectItem.subjectName}</p>
                <p>Tutor: {subjectItem.subjectFac}</p>
              </div>
            ))}
        </div>
          
          {/* <div className="app__courseinfo-coursenotes">
            {subArray.map(({subjectAssignment}) => (
              <h2>{subjectAssignment._key}</h2>
            ))}
          </div> */}

          {/* work on destructuring subjectAssignment and getting the _key value */}
    </div>
  )
}

export default CourseInfo