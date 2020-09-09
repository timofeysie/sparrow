import React, { useState } from "react";
import "./App.css";
/* a. 0 = no colour change
b. ‐100 = Blue
c. 100 = Red
2. The slider (3) should update the velocity input (2), in the range ‐100 to 100 inclusive.
4. The slider should be based on either a log or exponential scale, providing more detail
towards the negative velocity range (Blue).
The rate of change/derivative is proportional to the quantity itself.
*/
const useSlider = (min: any, max: any, defaultState: any, label: any, id: any) => {
  // magic numbers for the midpoint between blue and red 127, 204, 128,
  const redMid = 126;
  const greenMid = 207;
  const blueMin = 129;
  let transparency = '1';
  const [fillColor, setFillColor] = useState(
    `rgb(${redMid},${greenMid},${blueMin}, ${transparency})`
  );
  const [state, setSlide] = useState(defaultState);
  const handleChange = (e: any) => {
    const velocity = parseInt(e.target.value);
    let red, green, blue, progress;
    // magic numbers to make sure max red and green values are reached
    const greenTo255 = 1.01;
    const to255 = 1.277;
    const toGreenMin = 1;
    let exponential;
    // towards blue is negative velocity, red is positive
    if (velocity < 0) {
      progress = 100 - velocity;
      red = 255 - Math.round(progress * to255);
      green = Math.round((255 - 255 * (Math.abs(progress - 127) / 128) * greenTo255));
      blue = Math.round(progress * to255);
      // exponential decay formula to give an opacity range from 1 to 0.0
      transparency = Number(1 - (Math.pow(1.019, progress) / 100) * 2).toFixed(2);
    } else {
      progress = velocity;
      red = progress + redMid;
      green = Math.round(greenMid * (Math.abs(progress - 127) / 128) * toGreenMin);
      blue = blueMin - Math.round(progress * to255);
    }

    console.log(
      `exponential: ${exponential} velocity: ${velocity} progress: ${progress} rgb(${red},${green},${blue}), ${transparency}`
    );
    setFillColor(`rgb(${red},${green},${blue}, ${transparency})`);
    setSlide(velocity);
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
