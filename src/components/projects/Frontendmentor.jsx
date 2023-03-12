import React, { useState } from "react";
import Modal from "../../Modal";

export default function Frontendmentor(params) {    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <b onClick={()=> setIsOpen(true)}>Frontendmentor</b>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <li className="card">
                        <h3>Frontend Mentor challenges</h3>
                        <p>Small and fun challenges from <a href="https://www.frontendmentor.io/"
                                target="_blank">Frontend Mentor</a> community.</p>
                        <footer>
                            Made with: HTML, CSS, JS
                            <br />
                            <a href="https://galarist.github.io/frontendmentor/" target="_blank" role="link"
                                rel="noopener noreferrer">Demo</a> <a href="https://github.com/galarist/frontendmentor"
                                target="_blank" rel="noopener noreferrer">GitHub</a>
                        </footer>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}