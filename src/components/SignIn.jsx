import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";

function SignIn () {
    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [userExists, setUserExists] = useState(false)
    const [requestPending, setRequestPending] = useState(false)

    return (
        <div className="card signin-card">
            <h2>Sign In</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                setRequestPending(true)
                getUsers()
                .then(users => {
                    users.forEach(obj => {
                        if (obj.username === username) {
                            setUserExists(true)
                            setUser(obj)
                        }
                    })
                    setRequestPending(false)
                })
            }}>
                <label htmlFor="">Username:</label>
                <input disabled={requestPending} type="text" placeholder="grumpy19" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                {user.username ? <p>Welcome {user.username}! <Link to={'/'} className="return-home">Return to Home?</Link></p> : <button disabled={requestPending}>Sign In</button>}
            </form>
        </div>
    )
}

export default SignIn;