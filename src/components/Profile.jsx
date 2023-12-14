import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Profile () {
    const {user, setUser} = useContext(UserContext)

    if (user.username) {
        return (
            <div className="card profile-card">
                <h2>Profile</h2>
                <div className="profile-flex">
                    <div className="profile-left">
                        <p>Username:</p>
                        <p>Name:</p>
                    </div>
                    <div className="profile-right">
                        <p>{user.username}</p>
                        <p>{user.name}</p>
                    </div>
                </div>
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
                <button className="sign-button" onClick={() => setUser({})}>Sign Out</button>
            </div>
        )
    }
    else {
        return (
            <div className="card profile-card">
                <p id="profile-redirect">Looks like you're not signed in - Sign in <Link to="/login" className="redirect-link">here</Link></p>
            </div>
        )
    }
}

export default Profile;