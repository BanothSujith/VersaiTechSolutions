import React from 'react';
import './circularCard.css';

function Circularcard({items}) {
  return (
    <div className='CircularCard'>
<img src={items.pic} alt={items.name}/>
<h3>{items.name}</h3>
    </div>
  )
}

export default Circularcard