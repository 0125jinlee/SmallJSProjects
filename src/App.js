import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  const TogglerIconHandler = () => {
    setOpen(!open);
  };

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
                <button className="Link">Home</button>
              </li>
              <li className="Item">
                <button className="Link">About</button>
              </li>
              <li className="Item">
                <button className="Link">Store</button>
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
                <img src="sweets-1.jpeg" alt="sweets-1" />
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
              <button>all</button>
              <button>cakes</button>
              <button>cupcakes</button>
              <button>sweets</button>
              <button>doughnuts</button>
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
                  <input type="text" placeholder="item...." />
                </div>
              </form>
            </div>
          </div>
          <div className="StoreItems">
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="sweets-1.jpeg" alt="sweets-1" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>sweet item</h5>
                  <h5>
                    $ <strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cupcake-1.jpeg" alt="cupcake-1" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cupcake item</h5>
                  <h5>
                    $ <strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cake-1.jpeg" alt="cake-1" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cake item</h5>
                  <h5>
                    $ <strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="doughnut-1.jpeg" alt="doughnut-1" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>doughnut item</h5>
                  <h5>
                    $ <strong>5</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="sweets-2.jpeg" alt="sweets-2" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>sweet item</h5>
                  <h5>
                    $ <strong>10</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cupcake-2.jpeg" alt="cupcake-2" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cupcake item</h5>
                  <h5>
                    $ <strong>10</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cake-2.jpeg" alt="cake-2" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cake item</h5>
                  <h5>
                    $ <strong>10</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="doughnut-2.jpeg" alt="doughnut-2" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>doughnut item</h5>
                  <h5>
                    $ <strong>10</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="sweets-3.jpeg" alt="sweets-3" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>sweet item</h5>
                  <h5>
                    $ <strong>15</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cupcake-3.jpeg" alt="cupcake-3" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cupcake item</h5>
                  <h5>
                    $ <strong>15</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="cake-3.jpeg" alt="cake-3" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>cake item</h5>
                  <h5>
                    $ <strong>15</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="StoreItem">
              <div className="Card">
                <div className="ImgContainer">
                  <img src="doughnut-3.jpeg" alt="doughnut-3" />
                  <span>
                    <FontAwesomeIcon
                      className="ShoppingCartIcon"
                      icon={faShoppingCart}
                    />
                  </span>
                </div>
              </div>
              <div className="CardBody">
                <div className="CardText">
                  <h5>doughnut item</h5>
                  <h5>
                    $ <strong>15</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
