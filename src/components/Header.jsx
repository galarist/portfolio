import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Awards from './Awards';
import Contact from './Contact';

export default function Header () {
    return (
        <>
            <header id="mainHeader">
                <nav>
                    <ul>
                        <li><a target="_blank" href="https://github.com/galarist/" aria-label="github"><FontAwesomeIcon icon={faGithubAlt} /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/cristovaogalambos/" aria-label="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <Awards/>
                        <Contact/>
                    </ul>
                </nav>
            </header>
        </>
    )
}