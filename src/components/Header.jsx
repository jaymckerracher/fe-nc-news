import { Link } from "react-router-dom"

function Header () {
    return (
        <header className="app-header">
            <Link to='/'><h1>NC News</h1></Link>
            <img src='https://cdn-icons-png.flaticon.com/512/1042/1042680.png' alt="NC News Logo" id="logo-img"/>
        </header>
    );
}

export default Header;