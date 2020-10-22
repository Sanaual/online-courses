import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import course from './data/data.json';
import Courses from './Components/Courses/Courses';
import Enroll from './Components/Enroll/Enroll';

function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    setData(course);
  },[])
  const [enroll,setEnroll] = useState([]);
  const handleAdd = (course)=>{
    const newEnroll = [...enroll,course];
    setEnroll(newEnroll);
  }
  return (
    <div className="App">
      <h1>Kusumbagh Online Courses </h1>
      <h3>Phone:+0054345566</h3>
      <p>Email:kasfksaf@gmail.com</p>
      <Enroll enroll={enroll}></Enroll>
      

       <ul>
        {
          data.map(courses=><Courses courses={courses} handleAdd={handleAdd} key={courses.id}></Courses>)
        }
      </ul> 

      
      
    </div>
  );
}

export default App;
