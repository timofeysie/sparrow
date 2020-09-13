import React from "react";
import "./App.css";
import { StarContext } from "./features/star/StarContext";
import Star from "./features/star/Star";
import Slider from "./features/star/Slider";

function App() {
  return (
    <div className="App">
      <StarContext.Provider value={"rgb(255,255,255"}>
        <header className="App-header">
          <Star />
        </header>
        <div className="slideContainer">
          <Slider />
        </div>
      </StarContext.Provider>
    </div>
  );
}

export default App;
