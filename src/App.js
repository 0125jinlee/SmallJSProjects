import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [lastMsg, setLastMsg] = useState("");
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } else if (input === "" && lastMsg !== "") {
      setLastMsg(input);
    } else {
      setLastMsg(input);
      setInput("");
    }
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
        {show ? <h3 className="Alert">Please Enter A Value To Pass</h3> : null}
        <h2>Last Message Delivered</h2>
        <h2 className="lastMsg">{lastMsg ? lastMsg : "HELLO WORLD"}</h2>
      </div>
    </div>
  );
};

export default App;
