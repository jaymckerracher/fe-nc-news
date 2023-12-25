import { Link } from "react-router-dom";

function InvalidPath({message}) {
    return (
        <div className="invalid">
            <h2>OOPS!</h2>
            <p className="notification">{message}</p>
            <p className="notification invalid-link"><Link to={'/'}>Please return home...</Link></p>
        </div>
    )
}

export default InvalidPath;