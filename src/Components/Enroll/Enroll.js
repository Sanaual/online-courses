import React from 'react';
import './Enroll.css';

const Enroll = (props) => {
    const enroll = props.enroll;
    let totalPrice = 0;
    for (let i = 0; i < enroll.length; i++) {
        const courses = enroll[i];
        totalPrice = totalPrice + courses.price;
    }
    return (
        <div className="enroll">
           <h2>Number of Courses Added:{enroll.length}</h2> 
            <p>Total Price:{totalPrice}</p>
        </div>
    );
};

export default Enroll;