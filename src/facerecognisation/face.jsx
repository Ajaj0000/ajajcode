import faceIO from "@faceio/fiojs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import face from "../images/face.png"
import ReactLoading from 'react-loading';
import { IoPersonAddSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth2 , provider } from "../google/firebasegoogle";


function Face() {
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1500);
    })

    const [faceio, setfaceio] =useState()

    useEffect(() => {
        setfaceio(new faceIO("fioa039e"))
    }, [])

    const nav = useNavigate()
    const registration = async () => {
        try {
           
                let facedata = await faceio.enroll({
                    locale: "auto",
                    payload: {
                        email: "a@gmail.com",
                        pin: 1234
                    }
                })
            
            // console.log("age", facedata.details.age)
        } catch (e) {
            console.error(e)
        }
    }
    const login = async () => {
        try {
           
                let res = await faceio.authenticate({
                    locale: "auto",
    
                })
                nav("/home")
            
        } catch (e) {
            console.log(e)
        }
    }

    const Gsign = ()=>{
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
                        <div className="face">
                            <div className="face-lite">
                                <h1>Face Recognisation</h1>
                                <img src={face} alt="" />
                                <div className="face-btn">
                                    <button onClick={registration}>Sign in</button>
                                    <button onClick={login}>Login </button>
                                </div>
                                <div className="signbtn" style={{ width: "100%" }}>
                                    <div className="sign-lit">
                                        <Link to="/">
                                            <h2 className="login-method">
                                                <IoPersonAddSharp />
                                            </h2>
                                        </Link>
                                        <Link to="/mainemail">
                                            <h2 className="login-method">
                                                <MdEmail />
                                            </h2>
                                        </Link>
                                        <Link>
                                            <h2 className="login-method" onClick={Gsign}>
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
export { Face }