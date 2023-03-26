import React from 'react';
import './Khob.css'
const Khob = (props) => {
    return (
        <div className='knob'>
            <h1>SubCount: {props.count}</h1>
        </div>
    );
};

export default Khob;