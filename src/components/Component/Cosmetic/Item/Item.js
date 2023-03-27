import React from 'react';
import { addtoDb ,removeData, rmData } from '../../utilities/FakeDB';

import './Item.css'
const Item = (props) => {
    const addToCart = (id) => {
        addtoDb(id)
    };


    
    return (
        <div className='cart'>
            <h3>no.1 :{props.name}</h3>
            <p>id :{props.id}</p>
            <h5>price :${props.price}</h5>
            <button onClick={()=>addToCart(props.id)}>AddToCart</button>
            <button onClick={()=>removeData(props.id)}>Remove</button>
            <button onClick={()=>rmData()}>allRemove</button>
        </div>
    );
};

export default Item;