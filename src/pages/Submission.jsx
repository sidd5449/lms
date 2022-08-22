import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../client';

const Submission = () => {

    const subId = useParams();

    const [sub, setSub] = useState([]);
    const [subFile, setsubFile] = useState();

    const changeHandler = (event) => {
		setsubFile(event.target.files[0]);
        
	};

	const handleSubmission = () => {
        console.log(subFile);
	};

    useEffect(() => {
      const subQuery = `*[_id == "${subId._id}"]`;
      client.fetch(subQuery)
        .then((subDatabyId) => {
            setSub(subDatabyId);
        })
    })
    
  return (
    <div className="app__submissions">
        {sub.map((subData) => (
            <div className="app__submissions-content">
                <h1>{subData.title}</h1>
                <p>{subData.dueDate}</p>
                <input type="file" name="file" onChange={changeHandler} />
                <button onClick={handleSubmission}>Submit</button>

                

            </div>
        ))}
    </div>
  )
}

export default Submission