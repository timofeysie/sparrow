import React from "react";

// magic numbers for the midpoint between blue and red 127, 204, 128,
  const redMid = 126;
  const greenMid = 207;
  const blueMin = 129;
  let transparency = '1';

const defaultFill = `rgb(${redMid},${greenMid},${blueMin}, ${transparency})`;
let initialState = {
  fill: defaultFill,
  velocity: 0,
};

const StarContext = React.createContext(initialState);

let reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set-slide":
      return { ...state, velocity: action.payload };
    case "set-file-color":
      return { ...state, fill: action.payload };
  }
};

function StarContextProvider(props: any) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <StarContext.Provider value={value}>{props.children}</StarContext.Provider>
  );
}

let StarContextConsumer = StarContext.Consumer;

export { StarContext, StarContextProvider, StarContextConsumer };
