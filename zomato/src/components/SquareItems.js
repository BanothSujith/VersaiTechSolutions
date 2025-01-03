import React from 'react';
import Squarecard from '../Squarecard';
import items from '../Items';
import '../squarecomponent.css';

function SquareItems() {
  return (
    <div>
        <section className='squareComponents'>
    {
      items.map((item,index)=>(
<div key={index}>
<Squarecard items={item}/>

</div>
      ))
    }
   </section>
    </div>
  )
}

export default SquareItems