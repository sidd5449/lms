import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, getUrlFromId, urlFor } from '../client';
import Navbar from '../components/Navbar/Navbar';
import { FiArrowRightCircle, FiDownload } from 'react-icons/fi';
import './CourseInfo.scss'

const CourseInfo = () => {
  const docId = useParams();
  const [subject, setsubject] = useState([]);
  const [notesArray, setnotesArray] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [textBooks, settextBooks] = useState([]);

  // const apiUrl = `https://cyhyv1x0.api.sanity.io/v2022-02-01/data/doc/production/`;
  // console.log(apiUrl);

  useEffect(() => {
    const query = `*[_id == "${docId._id}"]`;
    client.fetch(query)
      .then((subjectDatabyID) => {
        setsubject(subjectDatabyID);
      })
  });
  useEffect(() => {
    subject.map((subjectItem) => {
      const query = `*["${subjectItem.subjectName}" in tags && _type == "subNotes"]`;
      client.fetch(query)
        .then((notesData) => {
          setnotesArray(notesData);
        })
    })
  });
  useEffect(() => {
    const query = '*[_type == "submissions"]';
    client.fetch(query)
      .then((submissionData) => {
        setSubmissions(submissionData);
      })
  }, []);
  useEffect(() => {
    subject.map((subjectItem) => {
      const query = `*["${subjectItem.subjectName}" in tags && _type == "textbooks"]`;
      client.fetch(query)
        .then((booksData) => {
          settextBooks(booksData);
        })
    })
  });












  return (
    <div className="app__courseinfo">


      <Navbar />
      <div className="app__courseinfo-wrapper">
        <div className="app__courseinfo-course app__coursepage-taglines">
          <div className="app__courseinfo-course-item">
            {subject.map((subjectItem) => (
              <div className="app__courseinfo-title">
                <p id='welcome'>{subjectItem.subjectName}</p>
                {/* <p>Tutor: {subjectItem.subjectFac}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="app__courseinfo-content">
          <div className="app__courseinfo-coursenotes">
            <h2>Your Notes</h2>
            {notesArray.map((notesItem) => {
              const fileLink = getUrlFromId(`${notesItem.notesFile.asset._ref}`);
              return (
                <div className="app__note-item">
                  <div className="app__note-item-desc">
                    <div className="bullet"></div>

                    <div className="app__note-item-title">
                      <h3>{notesItem.fileName}</h3>
                      <p>Uploaded on {notesItem._createdAt}</p>
                    </div>
                  </div>
                  <a href={fileLink} target="_blank" className='downloadIcon'>
                    <FiDownload
                      size={20}
                      color='var(--tertiary-color)'


                    />

                  </a>


                </div>
              )
            })}
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
        <div className="app__courseinfo-material">
          <h2>Your Textbooks</h2>
          <div className="app__courseinfo-textbooks">
                
                {textBooks.map((textBook) => {
                  const bookfileLink = getUrlFromId(`${textBook.textbookFile.asset._ref}`);
                  return(
                    <div className="app__courseinfo-textbooks-item">
                      
                      <img src={urlFor(textBook.previewImg)} alt={textBook.bookName} />
                      <p id='bookName'>{textBook.bookName}</p>
                      <p>{textBook.bookAuthor}</p>
                      <a href={bookfileLink} target='_blank' className = 'app__courseinfo-link'>
                        <FiArrowRightCircle
                        size={20}
                        color= 'var(--tertiary-color)'
                        />
                      </a>
                    </div>
                  )
                })}
          </div>
        </div>
        
      </div>
    </div>
  
  )
}

export default CourseInfo