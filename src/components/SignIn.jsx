import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";
import { ErrorMessageContext } from "../contexts/ErrorContext";
import { ErrorClassContext } from "../contexts/ErrorContext";

function SignIn () {
    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [requestPending, setRequestPending] = useState(false)
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)
    const {errorClass, setErrorClass} = useContext(ErrorClassContext)

    return (
        <div className="card signin-card">
            <h2>Sign In</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                setUsername('')
                setRequestPending(true)
                getUsers()
                .then(users => {
                    let foundUser = {};
                    users.forEach(obj => {
                        if (obj.username === username) {
                            setUser(obj)
                            foundUser = obj
                        }
                    })
                    setRequestPending(false)
                    if (!foundUser.username) {
                        return (
                            Promise.reject()
                        )
                    }
                })
                .catch(() => {
                    setRequestPending(false)
                    setErrorMessage('Please enter a valid username')
                    setErrorClass("error-container show-error")
                    setTimeout(() => {
                        setErrorClass("error-container hide-error")
                    } ,10000)
                })
            }}>
                <label htmlFor="">Username:</label>
                <input disabled={requestPending} type="text" placeholder="grumpy19" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                {user.username ? <p>Welcome {user.username}! <Link to={'/'} className="redirect-link">Return to Home?</Link></p> : <button disabled={requestPending} className="sign-button">Sign In</button>}
                {requestPending ? <p>Please Wait...</p> : null}
            </form>
        </div>
    )
}

export default SignIn;