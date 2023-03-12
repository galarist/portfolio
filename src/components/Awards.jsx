import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Modal from "../Modal";

export default function Awards(params) {    

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <li><a href="#" onClick={(e)=> {e.preventDefault();setIsOpen(true);}} aria-label="trophy"><FontAwesomeIcon icon={faTrophy} /></a></li>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <li className="card">
                    <article>       
                        <hgroup className="headings">
                            <center><b>Gold Medal <br /> VIRTUAL SKILLS WEEK 2021 - WorldSkills Australia</b></center>
                            <h2>Web Design & Development</h2>
                        </hgroup>
                    </article>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}