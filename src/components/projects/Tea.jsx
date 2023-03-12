import React, { useState } from "react";
import Modal from "../../Modal";

export default function Tea(params) {    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <b onClick={()=> setIsOpen(true)}>Tea</b>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <li className="card">
                        <h3>Tea</h3>
                        <p>
                            Tea themed responsive design.
                        </p>
                        <footer>
                            Made with: HTML, CSS, jQuery
                            <br />
                            <a href="https://galarist.github.io/tea/" target="_blank" role="link"
                                rel="noopener noreferrer">Demo</a> <a href="https://github.com/galarist/tea"
                                target="_blank" rel="noopener noreferrer">GitHub</a>
                        </footer>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}