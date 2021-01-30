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
                <div className="TipList">
                  <select>
                    <option selected value="0">
                      Choose...
                    </option>
                    <option value="1">Great - 20%</option>
                    <option value="2">Good - 15%</option>
                    <option value="3">Okay - 10%</option>
                    <option value="4">Bad - 1%</option>
                  </select>
                </div>
                <input
                  className="CalculateButton"
                  type="submit"
                  value="Calculate"
                />
              </section>
            </form>
            <div className="Loading">
              <img src="/loading.gif" alt="Loading" />
            </div>
            <div className="Result">
              <h3>
                Tip Amount
                <span>$</span> <span></span>
              </h3>
              <h3>
                Total Amount
                <span>$</span> <span></span>
              </h3>
              <h3>
                Each Person Owes
                <span>$</span> <span></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
