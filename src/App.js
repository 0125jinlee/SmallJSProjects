import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUser } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [billAmt, setBillAmt] = useState(0);
  const [people, setPeople] = useState(0);
  const [service, setService] = useState(0);
  const [tipAmt, setTipAmt] = useState(0);
  const [notification, setNotification] = useState(false);
  const [calculateBtn, setCalculateBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTipAmt(billAmt * service);
  }, [billAmt, service]);

  const billAmtHandler = (e) => {
    e.preventDefault();
    setBillAmt(Number(e.target.value));
  };

  const setPeopleHandler = (e) => {
    e.preventDefault();
    setPeople(Number(e.target.value));
  };

  const setServiceHandler = (e) => {
    e.preventDefault();
    setService(Number(e.target.value));
  };

  const setCalculateBtnHandler = (e) => {
    e.preventDefault();
    if (billAmt === 0 || people === 0 || service === 0) {
      setCalculateBtn(false);
      setNotification(true);
      setTimeout(() => setNotification(false), 4000);
    } else if (
      !calculateBtn &&
      billAmt !== 0 &&
      people !== 0 &&
      service !== 0
    ) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
      setTimeout(() => setCalculateBtn(true), 2000);
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="TipCalculator">
          <div className="Title">
            <h2>TIP CALCULATOR</h2>
          </div>
          <div className="Body">
            {notification ? (
              <div className="Notification">
                {billAmt === 0 ? <p>Bill amount cannot be blank</p> : null}
                {people === 0 ? (
                  <p>Number of users must be greater than zero</p>
                ) : null}
                {service === 0 ? <p>You must select a Service</p> : null}
              </div>
            ) : null}
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
                  <input
                    type="number"
                    className="NumberInput"
                    onChange={billAmtHandler}
                  />
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
                  <input
                    type="number"
                    className="NumberInput"
                    onChange={setPeopleHandler}
                  />
                </div>
              </section>
              <section>
                <h3>How Was Your Service?</h3>
                <div className="TipList">
                  <select onChange={setServiceHandler}>
                    <option selected value="0">
                      Choose...
                    </option>
                    <option value=".20">Great - 20%</option>
                    <option value=".15">Good - 15%</option>
                    <option value=".10">Okay - 10%</option>
                    <option value=".01">Bad - 1%</option>
                  </select>
                </div>
                <input
                  className="CalculateButton"
                  type="submit"
                  value="Calculate"
                  onClick={setCalculateBtnHandler}
                />
              </section>
            </form>
            {loading ? (
              <div className="Loading">
                <img src="Loading.gif" alt="Loading" />
              </div>
            ) : null}
            {calculateBtn ? (
              <div className="Result">
                <h3>
                  Tip Amount
                  <span> ${parseFloat(tipAmt).toFixed(2)}</span>
                </h3>
                <h3>
                  Total Amount
                  <span> ${parseFloat(billAmt + tipAmt).toFixed(2)}</span>
                </h3>
                <h3>
                  Each Person Owes
                  <span>
                    {" "}
                    ${parseFloat((billAmt + tipAmt) / people).toFixed(2)}
                  </span>
                </h3>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
