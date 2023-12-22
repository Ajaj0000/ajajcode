import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { auth2, provider } from "../google/firebasegoogle";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import toast, { Toaster } from 'react-hot-toast';
import loginimg from "../productsImages/loginphoto.png"
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { LuScanFace } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";


function Login() {



    // <input type="text" id="myInput" oninput="checkInput()">
    // <button id="myButton" disabled>Click me</button>

    //     function checkInput() {                                                  
    //         // Get the input and button elements
    //         var input = document.getElementById("myInput");
    //         var button = document.getElementById("myButton");

    //         // Check if the input value is not empty
    //         if (input.value.trim() !== "") {
    //             // Enable the button
    //             button.disabled = false;
    //         } else {
    //             // Disable the button
    //             button.disabled = true;
    //         }
    //     }



    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1500);
    })


    const [mynumber, setnumber] = useState("+91");
    const [otp, setotp] = useState("");
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState("");

    const signin = () => {
        if (mynumber === "" || mynumber.length < 10) return;
        let verify = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container"
        );
        auth.signInWithPhoneNumber(mynumber, verify)
            .then((result) => {
                setfinal(result);
                toast.success("Code Successfully sent to your number")
                setshow(true)
            })
            .catch((err) => {
                toast.error(err)
                window.location.reload();
            });
    };

    const ValidteOtp = () => {
        if (otp === null || final === null) return;
        final
            .confirm(otp)
            .then((result) => {
                toast.success("login successfully....")
            })
            .catch((err) => {
                toast.error("enter valid otp..")
            })
    }


    // google sign in 

    const Gsign = () => {
        auth2.signInWithPopup(provider).catch(alert)
    }

    // const direction = useNavigate()
    // const [name, setname] = useState()
    // const change = (e) => {
    //     setname(e.target.value)
    // }
    // const click = () => {
    //     if (name != null) {
    //         toast.success(`${name} Wellcome `)
    //         setTimeout(() => {
    //             direction("/")
    //         }, 1500)
    //     } else {
    //         toast.error("please enter your name")
    //     }
    // }

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
                        <ToastContainer position="top-center" />
                        <Navbar />
                        <div className="login">
                            <div className="login-card">
                                <div className="login-img">
                                    <img src={loginimg} alt="" />
                                </div>
                                <div style={{
                                    display: !show ? "block" : "none",
                                }}>
                                    <h1>Enter your phone number to continue</h1>
                                    <input
                                        value={mynumber}
                                        onChange={(e) => {
                                            setnumber(e.target.value);
                                        }}
                                        type="num" placeholder="Enter your 10 digit phone number" />
                                    <br />
                                    <div id="recaptcha-container" style={{ display: "flex", justifyContent: "center" }}></div>
                                    <button onClick={signin}>Sign in</button>
                                </div>


                                <div className="signbtn" style={{
                                    display: !show ? "block" : "none", width: "100%"
                                }}>
                                    <div className="sign-lit">
                                        <Link to="/mainemail">
                                            <h2 className="login-method">
                                                <MdEmail />
                                            </h2>
                                        </Link>
                                        <Link to="/face">
                                            <h2 className="login-method">
                                                <LuScanFace />
                                            </h2>
                                        </Link>
                                        <Link>
                                            <h2 className="login-method" onClick={Gsign}>
                                                <FaGoogle />
                                            </h2>
                                        </Link>
                                    </div>
                                </div>


                                <div
                                    style={{
                                        display: show ? "block" : "none",
                                    }}
                                >
                                    <input type="num" placeholder="Enter your otp"
                                        onChange={(e) => {
                                            setotp(e.target.value)
                                        }}
                                    />
                                    <button onClick={ValidteOtp}>Verify</button>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}
export { Login }