import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';

const CourseInfo = () => {
    const docId = useParams();
    console.log(docId);
    const [subject, setsubject] = useState();
    // const apiUrl = `https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/`;
    // console.log(apiUrl);
    
    client.getDocument(docId._id).then((doc) => {
      setsubject(doc);
      console.log(subject);
    });
    // const fetchSub = async () => {
    //     const {subData} =await axios.get(`https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/${docId._id}`)
    //     setsubjects(subData);  
    // };
    

    
    
    
  
    return (
    <div className="app__courseinfo">
        <h1>{subject?.subjectName}</h1>
    </div>
  )
}

export default CourseInfo