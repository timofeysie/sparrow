import React, { useState } from "react";
import "./App.css";

const useSlider = (min: any, max: any, defaultState: any, label: any, id: any) => {
  const [fillColor, setFillColor] = useState("rgb(0, 100, 0");
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e: any) => {
    let red, green, blue;
    if (e.target.value > 0) {
      red = e.target.value * 2.52;
      green = 255 - red;
      blue = 0;
    } else {
      blue = -e.target.value * 2.52;
      green = 255 - blue;
      red = 0;
    }
    green = 255 - (red + blue);
    const exp = Math.pow(2, blue);
    console.log(`${exp} rgb(${red},${green},${blue})`);
    setFillColor(`rgb(${red},${green},${blue})`);
    setSlide(e.target.value);
  };

  const sliderProps = {
    type: "range",
    id,
    min,
    max,
    step: 1,
    value: state,
    onChange: handleChange,
  };
  return { sliderProps, fillColor };
};

function App() {
  const state = useSlider(-100, 100, 0, "Threshold", "threshold");
  return (
    <div className="App">
      <header className="App-header">
        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="3"
            fill={state.fillColor}
          />
        </svg>
      </header>
      <div className="slideContainer">
        <input {...state.sliderProps} />
      </div>
    </div>
  );
}

export default App;
