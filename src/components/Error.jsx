import { useContext } from "react";
import { ErrorMessageContext, ErrorClassContext } from "../contexts/ErrorContext";

function Error () {
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)
    const {errorClass, setErrorClass} = useContext(ErrorClassContext)

    return (
        <div className={errorClass}>
            <h1>Oops! An error occured...</h1>
            <p>{errorMessage}</p>
        </div>
    )
}

export default Error;