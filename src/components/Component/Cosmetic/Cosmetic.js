import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Cosmetic = () => {
    const [cosmetic, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    
    
    return (
        <div>
            <h1>ma cosmetic buy:</h1>
            {
                cosmetic.map((item) => <Item key={item.id} name={item.name} id={item.id} price={item.price} />)
            }
        </div>
    );
};

export default Cosmetic;