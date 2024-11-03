import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

const Signin = () => {
    const firebase=useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signinuser = () => {
        firebase.signinUserWithEmailAndPassword(email, password).then(e => console.log('login sucesful: ', e)).catch(err => console.log('cant login: ', err))
        setEmail(""); setPassword("");
    }

    const signinGoogle=()=>{
        firebase.signinWithGoogle().then(()=>console.log('google login success')).catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Signin</h1>
            <div className="row">
                <label>Email</label>
                <input type="email" onChange={e => { setEmail(e.target.value) }} value={email} />
            </div>
            <div className="row">
                <label>Password</label>
                <input type="password" onChange={e => { setPassword(e.target.value) }} value={password} />
            </div>
            <div>
                <button onClick={signinuser}>Signin</button>
                <button onClick={signinGoogle}>SIgnin with Google</button>
            </div>
        </div>
    )
}

export default Signin;