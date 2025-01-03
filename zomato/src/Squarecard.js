import React from 'react';
import './SquareCard.css';
function Squarecard({items}) {
  return (
    <div className='SquareCard'>
      <div className='itemImg'>
    <img src={items.pic} alt={items.name} />
    </div>
    <div className='description'>
    <div className='squareCard-datails'>
    <h3>{items.name}</h3>
    <p>{items.discription}</p>
    </div>
    <div className='cartb'>
    <button>Add</button>
    </div>
    </div>
    </div>
  )
}

export default Squarecard