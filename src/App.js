import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [lastMsg, setLastMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setLastMsg(input);
    setInput("");
  };

  return (
    <div className="App">
      <div className="msgBox">
        <h2>A Message You Woud Like to Pass</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>Last Message Delivered</h2>
        <h2 className="lastMsg">{lastMsg ? lastMsg : "HELLO WORLD"}</h2>
      </div>
    </div>
  );
};

export default App;
