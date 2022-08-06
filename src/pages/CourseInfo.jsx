import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseInfo = () => {
    const id = useParams();
    const [subject, setsubject] = useState();
    const fetchSub = async () => {
        const {subData} = await axios.get(`https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/${id}`)
        console.log(subData);
  }
  
    return (
    <div className="app__courseinfo">

    </div>
  )
}

export default CourseInfo