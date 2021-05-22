import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Register() {

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passowrd_confirmation, setPassowrd_Confirmation] = useState("");
        const history = useHistory();

        async function signUp() {
                let item = { name, email, password, passowrd_confirmation }

                let result = await fetch("http://localhost/aura/api/v1/auth/signup", {
                        method:'POST',
                        headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json"
                                
                        },
                        body:JSON.stringify(item)
                });
                result = await result.json();
                console.warn("result", result)
                localStorage.setItem("user-info", JSON.stringify(result));
                history.push("/dashboard")
        }

        return (

                <div>


                        <section className="register-page section-b-space">
                                <div className="container">
                                        <div className="row">
                                                <div className="col-lg-12">
                                                        <h3>create account</h3>
                                                        <div className="theme-card">
                                                                <form className="theme-form">
                                                                        <div className="form-row">
                                                                                <div className="col-md-6">
                                                                                        <label htmlFor="name">Name</label>
                                                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name"
                                                                                                placeholder="Name" required="" />
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                        <label htmlFor="email">email</label>
                                                                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email"
                                                                                                placeholder="Email" required="" />
                                                                                </div>
                                                                        </div>
                                                                        <div className="form-row">

                                                                                <div className="col-md-6">
                                                                                        <label htmlFor="Password">Password</label>
                                                                                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="review"
                                                                                                placeholder="Enter your password" required="" />
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                        <label htmlFor="Confirm Password<">Confirm Password</label>
                                                                                        <input type="text" value={passowrd_confirmation} onChange={(e) => setPassowrd_Confirmation(e.target.value)} className="form-control" id="password_confirmation"
                                                                                                placeholder="Enter your Confirm Password" required="" />
                                                                                </div>
                                                                                <button onClick={signUp} className="btn btn-solid">create Account</button>
                                                                        </div>
                                                                </form>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                </div>
        )
}

export default Register