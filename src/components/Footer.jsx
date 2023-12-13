import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <footer>
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </footer>
    )
}

export default Footer;