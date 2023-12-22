import React, { useState } from "react";
import { register } from "./emailauth";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import loginimg from "../productsImages/loginphoto.png";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";


function Register() {
    // const [user] = useAuthState()
    const nav = useNavigate()
    const [form, setform] = useState({
        email: "",
        password: "",
    })
    const Submitbtn = async (e) => {
        e.preventDefault();
        await register(form);
        toast.success("Successfully Register..")
        nav("/home")
        // if(user){
        //     toast.error("user already exist..")
        //     window.reload()
        // }
    }
    return (
        <>
            <ToastContainer position="top-center" />
            <Navbar />
            <div className="login">
                <div className="login-card">
                    <div className="login-img">
                        <img src={loginimg} alt="" />
                    </div>
                    <div>
                        <h1>Enter your Email Address</h1>
                        <input type="email" placeholder="Enter your email address" onChange={(e) => setform({ ...form, email: e.target.value })} />
                        <br />
                        <input type="password" placeholder="Enter password" onChange={(e) => setform({ ...form, password: e.target.value })} />
                        <button onClick={Submitbtn}>Sign in</button>
                    </div>
                    <div className="e-reg" style={{ display: "flex", justifyContent: "flex-end", width: "69%", fontSize: ".9rem", marginBottom: "10px" }}>
                        <Link to="/email" style={{ color: "grey" }}><p>Already have an account ?</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register