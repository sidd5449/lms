import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client, getUrlFromId, urlFor } from '../client';
import Navbar from '../components/Navbar/Navbar';
import './CourseInfo.scss'

const CourseInfo = () => {
    const docId = useParams();
    const [subject, setsubject] = useState([]);
    const [subArray, setsubArray] = useState([]);
    const [notesArray, setnotesArray] = useState([]);
  
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
      subject.map((subjectItem) => {
        const query = `*["${subjectItem.subjectName}" in tags]`;
        client.fetch(query)
          .then((notesData) =>{
            setnotesArray(notesData);
            console.log(notesArray);
          })
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
              {notesArray.map((notesItem) => {
                const fileLink = getUrlFromId(`${notesItem.notesFile.asset._ref}`);
                return(
                  <div className="app__note-item">
                    <h3>{notesItem.fileName}</h3>
                    <a href={fileLink} target="_blank">Download</a>
                  </div>
                )
              })}
            </div>
        </div>
          
        

          
    </div>
  )
}

export default CourseInfo