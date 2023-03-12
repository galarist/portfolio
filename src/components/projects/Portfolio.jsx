import React, { useState } from "react";
import Modal from "../../Modal";
import portfolio from '../../assets/img/projects/portfolio.png'

export default function Portfolio(params) {    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <b onClick={()=> setIsOpen(true)}>Portfolio</b>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <img src={portfolio} alt=""/>
                    <li className="card">
                        <h3>My current portfolio</h3>
                        <p>
                            I have revised my old portfolio from almost scratch 
                            <br /> to make 
                            a modern, elegant and minimal design. 
                        </p>
                        <footer>Made with: React.js, <a href="https://picocss.com/" target="_blank" rel="noopener noreferrer">Pico.css</a> and ❤️</footer>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}