import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";

const Modal = (props) => {
  if (props.data.length === 0) {
    return null;
  }
  return (
    <div
      className="ModalContainer"
      style={props.modalOpen ? { display: "block" } : { display: "none" }}
    >
      <div className="ModalImageContainer">
        <div className="ModalImageBox">
          <span onClick={props.modalHandler} className="ModalWindowClose">
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
          <div
            className="ModalImage"
            style={{
              backgroundImage: `url(${props.data[props.offset].imgUrl})`,
            }}
          ></div>
          <span onClick={props.leftBtnHandler} className="ModalBtnLeft">
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          <span onClick={props.rightBtnHandler} className="ModalBtnRight">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
