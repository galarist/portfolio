import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
    if (!open) return null;
    if (open) {
        document.querySelector("body").style.overflow = "hidden";
    } 

    return ReactDom.createPortal(
    <>
        <div className="modal"/>
        <div className="overlay">
            <div className="overlay__wrapper">
                <div className="wrapper"><h1 onClick={onClose}><FontAwesomeIcon icon={faTimes}/></h1></div>
                {children}
            </div>
        </div>
    </>,
    document.getElementById("root")
    );
}
