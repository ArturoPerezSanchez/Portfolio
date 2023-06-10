import React, { useState } from 'react';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from 'react-responsive';

const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define the maximum width to consider the device as mobile
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleTouchEnd = () => {
    setTimeout(() => {
      setHoveredIndex(null);
    }, 500); // (500 miliseconds)
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            <img
              className={`w-[100%] h-[100%] object-contain rounded-full ${hoveredIndex === index ? 'hover-animation' : ''}`}
              src={technology.icon}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => handleTouchEnd()}
              alt={technology.name}
            />
          ) : (
            <BallCanvas color={technology.color} icon={technology.icon} />
          )}
          <div
            style={{
              background: technology.color,
              textShadow: "2px 0 #0005, -2px 0 #0005, 0 2px #0005, 0 -2px #0005, 1px 1px #0005, -1px -1px #0005, 1px -1px #0005, -1px 1px #0005"
            }}
            className="w-full text-center rounded-full opacity-80"
          >
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "tech");
