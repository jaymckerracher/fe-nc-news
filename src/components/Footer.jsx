import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../contexts/UserContext';

function Footer () {
    const {user, setUser} = useContext(UserContext)
    const profileIconPath = user.username ? '/profile' : '/login'

    return (
        <footer>
            <div className='footer-icons'>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faHouse} className='icon'></FontAwesomeIcon>
                </Link>
                <Link to={profileIconPath}>
                    <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;