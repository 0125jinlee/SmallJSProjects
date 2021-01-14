import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";

const Modal = (props) => {
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
              backgroundImage: props.imgUrl,
            }}
          ></div>
          <span className="ModalBtnLeft">
            <FontAwesomeIcon icon={faCaretLeft} />
          </span>
          <span className="ModalBtnRight">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
