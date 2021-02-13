import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import StoreItem from "./StoreItem";
import CartList from "./CartList";
import Modal from "./Modal";
import { data } from "./data";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(true);
  const [filterSelected, setfilterSelected] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth >= 992) {
        setOpen(true);
      } else if (window.innerWidth < 992) {
        setOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setOpen(true);
      } else if (window.innerWidth < 992) {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        if (filterSelected === "all") {
          return Object.keys(item).some((key) =>
            item[key].toLowerCase().includes(searchTerm)
          );
        } else {
          return Object.keys(item).some((key) => item[key] === filterSelected);
        }
      })
    );
  }, [filterSelected, searchTerm]);

  const TogglerIconHandler = () => {
    setOpen(!open);
  };

  const searchTermHandler = (e) => {
    e.preventDefault();
    setfilterSelected("all");
    setSearchTerm(e.target.value.toLowerCase().trim());
  };

  const allButtonHandler = () => {
    setfilterSelected("all");
  };

  const cakesButtonHandler = () => {
    setfilterSelected("cake");
  };

  const cupcakesButtonHandler = () => {
    setfilterSelected("cupcake");
  };

  const sweetsButtonHandler = () => {
    setfilterSelected("sweet");
  };

  const doughnutsButtonHandler = () => {
    setfilterSelected("doughnut");
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const leftBtnHandler = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(filteredData.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const rightBtnHandler = () => {
    if (selectedIndex + 1 === filteredData.length) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="NavBar">
          <a className="Logo" href="/">
            <img src="logo.svg" alt="Logo" />
          </a>
          <button
            className="NavBarToggler"
            type="button"
            onClick={TogglerIconHandler}
            data-toggle="collapse"
            data-target=".NavBarCollapse"
          >
            <span>
              <FontAwesomeIcon className="TogglerIcon" icon={faBars} />
            </span>
          </button>
          <div
            className="NavBarCollapse"
            style={{
              display: open ? "flex" : "none",
            }}
          >
            <ul className="List">
              <li className="Item">
                <button className="Link" key="homebutton">
                  Home
                </button>
              </li>
              <li className="Item">
                <button className="Link" key="aboutbutton">
                  About
                </button>
              </li>
              <li className="Item">
                <button className="Link" key="storebutton">
                  Store
                </button>
              </li>
            </ul>
          </div>
          <div className="Info">
            <div className="PhoneNumber">
              <span>
                <FontAwesomeIcon className="PhoneIcon" icon={faPhone} />
              </span>
              <p>+ 123 456 789</p>
            </div>
            <div className="Cart">
              <span>
                <FontAwesomeIcon className="CartIcon" icon={faShoppingCart} />
              </span>
              <p className="Price">
                <span id="count">2 </span> items - $
                <span id="total">10.49</span>
              </p>
            </div>
          </div>
        </nav>
        <div className="HeaderContainer">
          <div className="HeaderRow">
            <CartList />
            <div className="Banner">
              <h1>
                welcome to <strong>grandma's</strong>
              </h1>
              <button>explore</button>
            </div>
          </div>
        </div>
      </header>
      <section className="About">
        <div className="Container">
          <div className="AboutRow">
            <div className="AboutColumn">
              <h1>
                about <strong>us</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                aliquam voluptas beatae vitae expedita consectetur nesciunt quia
                deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                porro at dolorum! Ad!
              </p>
              <button>explore</button>
            </div>
            <div className="AboutImgColumn">
              <div class="AboutImgContainer">
                <img src="sweet-1.jpeg" alt="sweet-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Store">
        <div className="Container">
          <div className="StoreRow">
            <div className="StoreTitle">
              <h1>
                our <strong>store</strong>
              </h1>
            </div>
          </div>
          <div className="StoreRow">
            <div className="StoreButtons">
              <button onClick={allButtonHandler}>all</button>
              <button onClick={cakesButtonHandler}>cakes</button>
              <button onClick={cupcakesButtonHandler}>cupcakes</button>
              <button onClick={sweetsButtonHandler}>sweets</button>
              <button onClick={doughnutsButtonHandler}>doughnuts</button>
            </div>
          </div>
          <div className="StoreRow">
            <div className="StoreSearch">
              <form>
                <div className="Input">
                  <div className="InputPrepend">
                    <span>
                      <FontAwesomeIcon className="SearchIcon" icon={faSearch} />
                    </span>
                  </div>
                  <input
                    onChange={searchTermHandler}
                    type="text"
                    placeholder="item...."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="StoreItems">
            {filteredData.map((item, index) => (
              <StoreItem
                imgUrl={item.imgUrl}
                item={item.item}
                price={item.price}
                modalHandler={() => {
                  modalHandler();
                  setSelectedIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal
        modalOpen={modalOpen}
        modalHandler={modalHandler}
        data={filteredData}
        offset={selectedIndex}
        rightBtnHandler={rightBtnHandler}
        leftBtnHandler={leftBtnHandler}
      />
    </div>
  );
};

export default App;
