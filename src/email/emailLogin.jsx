import React, { useEffect, useState } from "react";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import loginimg from "../productsImages/loginphoto.png"
import { login } from "./emailauth";
import ReactLoading from 'react-loading';
import { IoPersonAddSharp } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth2, provider } from "../google/firebasegoogle";


function Email() {
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1000)
    }, [])

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const Ebutton = async (e) => {
        e.preventDefault()
        await login(email)
        await login(password)
    }

    const Gsing=()=>{
        auth2.signInWithPopup(provider).catch(alert)
    }

    return (
        <>
            {
                isloading ?
                    <>
                        <div className="center" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div>
                                <ReactLoading type="bubbles" color="#bb2167" height={'100%'} width={'100%'} />
                                <h1 style={{ color: "#bb2167" }}>Loading...</h1>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <Navbar />
                        <div className="login">
                            <div className="login-card">
                                <div className="login-img">
                                    <img src={loginimg} alt="" />
                                </div>
                                <div>
                                    <h1>Login with your Email</h1>
                                    <input type="email" placeholder="Enter your email address" onChange={setemail} />
                                    <br />
                                    <input type="password" placeholder="enter your password" onChange={setpassword} />
                                    <button onClick={Ebutton}>Sign in</button>
                                </div>
                                <div className="e-reg" style={{ display: "flex", justifyContent: "flex-end", width: "69%", fontSize: ".9rem", }}>
                                    <Link to="/register" style={{ color: "grey" }}><p>Don't have an account ?</p></Link>
                                </div>
                                <div className="signbtn" style={{ width: "100%", marginTop: "10px" }}>
                                    <div className="sign-lit">
                                        <Link to="/">
                                            <h2 className="login-method">
                                                <IoPersonAddSharp />
                                            </h2>
                                        </Link>
                                        <Link to="/face">
                                            <h2 className="login-method">
                                                <LuScanFace />
                                            </h2>
                                        </Link>
                                        <Link>
                                            <h2 className="login-method" onClick={Gsing}>
                                                <FaGoogle />
                                            </h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}
export { Email }