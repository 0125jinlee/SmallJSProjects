import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life",
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith",
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars ",
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau",
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh",
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly",
    },
  ];

  const clickHandler = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    setClicked(true);
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  };

  return (
    <div className="App">
      <div className="Main">
        <button onClick={clickHandler}>Generate Quote</button>
        <div className="QuoteBox">
          <h3>
            <svg
              className="QuoteIcon"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="quote-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentcolor"
                d="M 464 256 h -80 v -64 c 0 -35.3 28.7 -64 64 -64 h 8 c 13.3 0 24 -10.7 24 -24 V 56 c 0 -13.3 -10.7 -24 -24 -24 h -8 c -88.4 0 -160 71.6 -160 160 v 240 c 0 26.5 21.5 48 48 48 h 128 c 26.5 0 48 -21.5 48 -48 V 304 c 0 -26.5 -21.5 -48 -48 -48 Z m -288 0 H 96 v -64 c 0 -35.3 28.7 -64 64 -64 h 8 c 13.3 0 24 -10.7 24 -24 V 56 c 0 -13.3 -10.7 -24 -24 -24 h -8 C 71.6 32 0 103.6 0 192 v 240 c 0 26.5 21.5 48 48 48 h 128 c 26.5 0 48 -21.5 48 -48 V 304 c 0 -26.5 -21.5 -48 -48 -48 Z"
              ></path>
            </svg>
            <span className="Quote">
              {clicked ? quote : "Press the Button!"}
            </span>
            <div className="Author">{clicked ? "-" + author : "Author"}</div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
