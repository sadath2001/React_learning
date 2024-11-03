import React, { useState } from "react"
import { useFirebase } from "../context/Firebase";

const Signup= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const firebase=useFirebase();
    const signup = () => {
        firebase.signupUserWithEmailAndPassword(email, password).then(() => alert('success'))
        setEmail(""); setPassword("");

    }
    return (
        <div>
            <h1>Signup</h1>
            <div className="row">
                <label>Email</label>
                <input type="email" onChange={e => { setEmail(e.target.value) }} value={email} />
            </div>
            <div className="row">
                <label>Password</label>
                <input type="password" onChange={e => { setPassword(e.target.value) }} value={password} />
            </div>
            <div>
                <button onClick={signup}>Signup</button>
            </div>

        </div>
    )
}

export default Signup