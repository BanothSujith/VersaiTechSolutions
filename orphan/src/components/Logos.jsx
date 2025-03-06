import React, { useEffect, useRef, useState } from "react";

const logos = [
  "https://www.vhv.rs/dpng/d/437-4379409_donate-charity-png-photos-charity-logo-transparent-png.png",
  "https://tse4.mm.bing.net/th?id=OIP.uxyyGB6qWl4f4QlFeDecQwHaFZ&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.DTLivK8j_LEA5ecjTUnbQwHaHk&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.2l9_zeHasE0JyDOS4jkt3wHaHa&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.uxyyGB6qWl4f4QlFeDecQwHaFZ&pid=Api&P=0&h=180",
  "https://tse4.mm.bing.net/th?id=OIP.DTLivK8j_LEA5ecjTUnbQwHaHk&pid=Api&P=0&h=180",
  "https://tse3.mm.bing.net/th?id=OIP.2l9_zeHasE0JyDOS4jkt3wHaHa&pid=Api&P=0&h=180",
];

const Logos = () => {
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += 400; 
        if (
          scrollContainer.current.scrollLeft >=
          scrollContainer.current.scrollWidth -
            scrollContainer.current.clientWidth
        ) {
          scrollContainer.current.scrollLeft = 0; 
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 4;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollContainer}
      className="flex gap-18 overflow-x-auto hide-scrollbar select-none transition-all duration-700 ease-initial"
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
    >
      {logos.concat(logos).map((logo, i) => (
        <img
          key={i}
          src={logo}
          draggable="false"
          className="min-w-64 aspect-video grayscale transition-all duration-300 ease-in hover:grayscale-0"
        />
      ))}
    </div>
  );
};

export default Logos;
