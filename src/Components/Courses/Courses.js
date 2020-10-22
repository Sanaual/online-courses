import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const {name,instractor,price,id,email} = props.courses;
    const handleAdd = props.handleAdd;

    return (
        <div className="course">
        <div style={{border:"2px solid blue",marginBottom:"10px",padding:"10px"}}>
            <h1>Name of the Course:{name}</h1>
            <h3>Course Instructor:{instractor}</h3>
            <h5>Email:{email}</h5>
            <p>Price:{price}</p>
            <button style={{backgroundColor:"green",color:"white",padding:"10px",borderRadius:"5px"}} onClick={()=>handleAdd(props.courses)}>Enroll Now</button>
        </div>
        </div>
    );
};

export default Courses;