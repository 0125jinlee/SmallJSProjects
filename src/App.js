import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUser } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <div className="TipCalculator">
          <div className="Title">
            <h2>TIP CALCULATOR</h2>
          </div>
          <div className="Body">
            <div className="Notification">
              <p>Bill amount cannot be blank</p>
              <p>Number of users must be greater than zero</p>
              <p>You must select a Service</p>
            </div>
            <form className="TipForm">
              <section>
                <h3>How Much Was Your Bill ?</h3>
                <div className="InputGroup">
                  <div className="InputGroupPrepend">
                    <span>
                      <FontAwesomeIcon
                        className="DollarIcon"
                        icon={faDollarSign}
                      />
                    </span>
                  </div>
                  <input type="number" className="NumberInput" />
                </div>
              </section>
              <section>
                <h3>How Many People Sharing The Bill?</h3>
                <div className="InputGroup">
                  <div className="InputGroupPrepend">
                    <span>
                      <FontAwesomeIcon className="UserIcon" icon={faUser} />
                    </span>
                  </div>
                  <input type="number" className="NumberInput" />
                </div>
              </section>
              <section>
                <h3>How Was Your Service?</h3>
                <ul className="TipList">
                  <li className="Choice">Choose...</li>
                  <li className="Choice">Great 20%</li>
                  <li className="Choice">Good 15%</li>
                  <li className="Choice">Okay 10%</li>
                  <li className="Choice">Bad 1%</li>
                </ul>
              </section>
              <button>Calculate</button>
            </form>
            <div className="Loading">
              <img src="/loading.gif" alt="Loading" />
            </div>
            <div className="Result">
              <h3>
                Tip Amount
                <span>$</span> <span>5.00</span>
              </h3>
              <h3>
                Total Amount
                <span>$</span> <span>55.00</span>
              </h3>
              <h3>
                Each Person Owes
                <span>$</span> <span>55.00</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
