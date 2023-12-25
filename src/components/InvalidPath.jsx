import { Link } from "react-router-dom";

function InvalidPath() {
    return (
        <div className="invalid">
            <h2>OOPS!</h2>
            <p className="notification">This page doesn't exist!</p>
            <p className="notification invalid-link"><Link to={'/'}>Please return home...</Link></p>
        </div>
    )
}

export default InvalidPath;