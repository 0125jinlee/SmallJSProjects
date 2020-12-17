import { useState } from "react";

import "./App.css";

const App = () => {
  const [background, setBackground] = useState("");
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "black",
    "pink",
    "brown",
    "beige",
  ];

  const clickHandler = () => {
    setBackground(color[Math.ceil(Math.random() * color.length)]);
  };

  return (
    <div className="App" style={{ backgroundColor: background }}>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
};

export default App;
