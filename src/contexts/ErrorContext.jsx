import { useState, createContext } from "react";

export const ErrorMessageContext = createContext();

export const ErrorMessageProvider = ({children}) => {
    const [errorMessage, setErrorMessage] = useState()

    return (
        <ErrorMessageContext.Provider value={{errorMessage, setErrorMessage}}>
            {children}
        </ErrorMessageContext.Provider>
    )
}

export const ErrorClassContext = createContext();

export const ErrorClassProvider = ({children}) => {
    const [errorClass, setErrorClass] = useState("error-container hide-error")

    return (
        <ErrorClassContext.Provider value={{errorClass, setErrorClass}}>
            {children}
        </ErrorClassContext.Provider>
    )
}