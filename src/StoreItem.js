import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./StoreItem.css";

const StoreItem = (props) => {
  return (
    <div className="StoreItem">
      <div className="Card">
        <div className="ImgContainer">
          <img src={props.imgUrl} alt={props.imgUrl} />
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
          <h5>{props.item} item</h5>
          <h5>
            $ <strong>{props.price}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
