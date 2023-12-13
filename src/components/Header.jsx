import { Link } from "react-router-dom"

function Header () {
    return (
        <header className="app-header">
            <div className="header-content-container">
                <Link to='/'><h1>NC News</h1></Link>
                <img src='https://cdn-icons-png.flaticon.com/512/1042/1042680.png' alt="NC News Logo" id="logo-img"/>
            </div>
        </header>
    );
}

export default Header;