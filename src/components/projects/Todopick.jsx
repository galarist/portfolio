import React, { useState } from "react";
import Modal from "../../Modal";

export default function TodoPick(params) {    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <b onClick={()=> setIsOpen(true)}>ToDoPick</b>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <li className="card">
                        <h3>A To Do List with a picker</h3>
                        <p>A mobile friendly designed to-do list web application with a random picker from scratch.</p>
                        <ul>
                        Features:
                            <li>Random pick - Picks randomly from non-completed tasks</li>
                            <li>Deselect pick - Unpicks the picked task</li>
                            <li>Responsive design - Allows to use on mobile and desktop</li>
                            <li>Localstorage - Store tasks in browser locally in cookie 🍪</li>
                            <li>Drag n' Drop - Allow user to drag and drop a task to a different position</li>
                            <li>Check - Complete single task</li>
                            <li>Redo - Redo single task</li>
                            <li>Delete - Delete single task</li>
                            <li>Purge - Erases all tasks</li>
                        </ul>
                        <footer>
                            Made with: HTML, CSS, VanillaJS
                            <br />
                            <a href="https://todopick.com/" target="_blank" role="link" rel="noopener noreferrer">Demo</a>
                        </footer> 
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}