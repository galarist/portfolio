import React, { useState } from "react";
import Modal from "../../Modal";
import medhx from '../../assets/img/projects/medhx.png'
export default function Medhx(params) {    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <b onClick={()=> setIsOpen(true)}>medHX</b>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <img src={medhx} alt="medhx" />
                    <li className="card">
                        <h3>medHX</h3>
                        <p>medHX is a medical based web application were patients are able to interact with
                            <br /> their doctor(s) and doctors can interact with their patients.
                        </p>
                        <ul>
                        Features:
                            <li>Doctor: create, update or remove appointment for patient</li>
                            <li>Doctor: create, update or remove medications for patient</li>
                            <li>Doctor: create, update or remove reports for patient</li>
                            <li>Patient: cancel appointment</li>
                            <li>Patient: set and unset reminder for medications</li>
                            <li>Patient: View and print reports</li>
                            <li>Light and Dark theme</li>
                        </ul>
                        <footer>
                            Made with: ReactJS Hooks, PHP, MySQL, <a href="http://ionicframework.com" target="_blank"
                                rel="noopener noreferrer">Ionicframework</a>,
                            <br /> and <a href="https://ionic.io/ionicons" target="_blank"
                                rel="noopener noreferrer">Ionicons</a>
                            <br />
                            <a href="https://medhx.netlify.app/" target="_blank" role="link"
                                rel="noopener noreferrer">Demo</a>
                        </footer>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}