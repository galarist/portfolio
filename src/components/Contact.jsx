import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip'
import useCopy from '@react-hook/copy'
import Modal from "../Modal";

export default function Contact(params) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        const details = document.querySelector("details")
        const toggleElements = document.querySelectorAll('details ul li');
        details.addEventListener("toggle", function() {
            if (details.hasAttribute("open")) {
                toggleElements.forEach(el => {
                    el.addEventListener('click', (e) => {
                        details.removeAttribute('open')
                    });
                });
            }
        })
    }
    const {copied, copy, reset} = useCopy(
        'cristovaogalambos@gmail.com'
    )
    useEffect(()=> {
        toggle();
    })
    return (
        <>
            <li>
                <details role="list">
                    <summary role="link">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </summary>
                    <ul>
                        <li><a href="#" onClick={(e)=> {e.preventDefault();setIsOpen(true);}} aria-label="form">Open Form</a></li>
                        <li><a href='mailto:cristovaogalambos@gmail.com' aria-label="client">Message App</a></li>
                        <li><a href="#" onClick={(e)=> {e.preventDefault()}} data-tip data-for='clickme' data-event='click'>Copy email</a></li>
                    </ul>
                    <ReactTooltip
                        id='clickme' 
                        place='bottom'
                        border={true}
                        effect='solid' 
                        backgroundColor='rgb(27, 40, 50)'
                        afterShow={
                                    (evt => {
                                        evt.preventDefault();
                                        //navigator.clipboard.writeText("<empty clipboard>");
                                        copy();
                                        ReactTooltip.hide();
                                    })}
                        afterHide={() => {
                                    const details = document.querySelector("details")
                                    details.removeAttribute('open')
                                    }}
                        delayHide={1200}
                        clickable={true} 
                    >
                        Copied!
                    </ReactTooltip>
                </details>
            </li>
            <Modal open={isOpen} onClose={()=> { document.querySelector("body").style.overflow = "auto"; setIsOpen(false);}}>
            <div className="projects">
                <ul className="card__wrapper">
                    <li className="card">
                        <article>
                        <form>
                            <p>Note: This option is not available yet!</p>
                            <div className="grid">

                                <label htmlFor="firstname">
                                    First name
                                    <input type="text" id="firstname" name="firstname" placeholder="First name"
                                        required />
                                </label>

                                <label htmlFor="lastname">
                                    Last name
                                    <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
                                </label>

                            </div>

                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" name="email" placeholder="Email address" required />

                            <label htmlFor="subject">Subject</label>
                            <select id="subject" required>
                                <option defaultValue="">Select a subject</option>
                                <option value="">…</option>
                            </select>

                            <label htmlFor="message">Message</label>
                            <textarea type="text" id="message" name="message" placeholder="" required />
                            <button disabled type="submit">Submit</button>
                        </form>
                        </article>
                    </li>
                </ul>
            </div>
            </Modal>
        </>
    )
}