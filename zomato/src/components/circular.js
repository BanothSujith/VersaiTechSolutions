import React,{useRef} from 'react';
import '../circularComponent.css';
import Squarecard from '../Squarecard';
import Circularcard from '../Cirtularcard';
import items from '../Items';
function CircularItems() {
  const scrollContainer = React.useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -scrollContainer.current.firstChild.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: scrollContainer.current.firstChild.offsetWidth, 
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt; 
      </button>
   <section className='circularCard' ref={scrollContainer}>
    {
      items.map((item,index)=>(
<div key={index}>
<Circularcard items={item}/>

</div>
      ))
    }
   </section>
   <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}


export default CircularItems;
