import React, { useContext } from "react";
import StarContext from './StarContext';

function Star() {
  const fill = useContext(StarContext);
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="3"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default Star;
