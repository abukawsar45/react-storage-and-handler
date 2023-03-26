import React from 'react';

const Watch = (props) => {
    return (
        <div>
            <h1>this is my {props.name}</h1>
            <h2>Steps: {props.count}</h2>
        </div>
    );
};

export default Watch;