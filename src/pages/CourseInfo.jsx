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
    });
    useEffect(() => {
      const subQuery = `*[_id == "${docId._id}"]{subjectAssignment[]}`;
      client.fetch(subQuery)
        .then((subArrayData) =>{
          setsubArray(subArrayData);
        })
    });
    
    
    

    
    
    
  
    return (
    <div className="app__courseinfo">
        

        <Navbar />
        <div className="app__courseinfo-course">
            <div className="app__courseinfo-ourse-item">
              {subject.map((subjectItem) => (
                <div className="app__courseinfo-title">
                  <p id='courseName'>{subjectItem.subjectName}</p>
                  <p>Tutor: {subjectItem.subjectFac}</p>
                </div>
              ))}
            </div>
            <div className="app__courseinfo-coursenotes">
              {subArray.map(({subjectAssignment}) => {
                return(subjectAssignment.map((item, index) => {
                    return (<p key={index}>{item._key}</p>)
                }))
                })}
            </div>
        </div>
          
        

          {/* work on destructuring subjectAssignment and getting the _key value */}
          {/* ref: https://bobbyhadz.com/blog/react-map-nested-array */}
    </div>
  )
}

export default CourseInfo