import React, { useEffect, useState } from "react";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import { Cartsection } from "./cartsection";
import ReCAPTCHA from "react-google-recaptcha";
import { FaBagShopping } from "react-icons/fa6";
import { useCart } from "react-use-cart";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";



function Checkout() {

    const { cartTotal } = useCart()
    const [tick, setTick] = useState(false)

    const [pin, setpin] = useState("")
    const [pindata, setpindata] = useState([])
    const write = (e) => {
        setpin(e.target.value)
    }

    async function Pinn() {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`)
        const getdata = await res.json();
        // const getvalue = getdata && getdata[0].PostOffice;
        setpindata(getdata)
    }
    useEffect(() => {
        Pinn()
    },[pin])

    const none = (e) => {
        setTick(!tick)
    }
    // if(input.value.trim() ! == ""){
    //     button.disabled=false
    // }

    
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <>
            <Navbar />
            <div className="kakasi">
                <div className="kakasi-lite">
                    <h1>Checkout</h1>
                    <h2>1. Deliver Details</h2>

                    <div className="deliver-detail">
                        <div className="input-name">
                            <label htmlFor="">Name</label>
                            <br />
                            <input type="text" required/>
                        </div>
                        <div className="input-name">
                            <label htmlFor="">Email</label>
                            <br />
                            <input type="email" required/>
                        </div>
                    </div>

                    <div className="input-add">
                        <label htmlFor="">Address</label>
                        <br />
                        <input type="text" required/>
                    </div>

                    <div className="deliver-detail">
                        <div className="input-name">
                            <label htmlFor="">Phone Number</label>
                            <br />
                            <input type="number" placeholder="Your 10 degit phone number" required/>
                        </div>
                        <div className="input-name">
                            <label htmlFor="">PinCode (india)</label>
                            <br />
                            <input type="num" value={pin} onChange={write} />
                        </div>
                    </div>

                    <div className="deliver-detail">
                        {
                            pindata.map((item) => {
                                return (
                                    <>
                                        {
                                            item.Status === "Success" ?
                                                <>
                                                    <div className="input-name">
                                                        <label htmlFor="">State</label>
                                                        <br />
                                                        <input type="text" value={item.PostOffice[0].Circle}/>
                                                    </div>
                                                    <div className="input-name">
                                                        <label htmlFor="">District</label>
                                                        <br />
                                                        <input type="text" value={item.PostOffice[0].District}/>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                </>
                                        }
                                    </>
                                )
                            })
                        }
                        {/* <div className="input-name">
                            <label htmlFor="">State</label>
                            <br />
                            <input type="text" />
                        </div>
                        <div className="input-name">
                            <label htmlFor="">District</label>
                            <br />
                            <input type="text" />
                        </div> */}
                    </div>



                    <div className="kakasi">
                        <div className="kakasi-lite1">
                            <h2>2. Review Cart Items & Pay</h2>
                            <div className="check-cart">
                                <Cartsection />
                            </div>
                        </div>
                    </div>

                    <div className="limited-offer">
                        <div className="limited-offer2">
                            <span className="bg-pink">Limited Offer</span>
                            <span>Get Flat 10% off on all prepaid orders above ₹249 Use coupon CODESWEAR10</span>
                        </div>
                    </div>
                    <div className="limited-offer1">
                        <div className="recaptcha">
                            <ReCAPTCHA
                                sitekey="Your client site key"
                                onChange={onChange}
                            />
                        </div>
                        {
                            !tick &&
                            (
                                <div className="promo">
                                    <label htmlFor="">Apply promocode</label>
                                    <br />
                                    <input type="text" placeholder="Enter promocode" />
                                    <button>Apply</button>
                                </div>
                            )
                        }
                    </div>
                    <div className="case">
                        <input type="checkbox" id="checkA" checked={tick} onChange={none} />
                        <label htmlFor="checkA">Place a case on deliver order here (coupon code not avalible)</label>
                        <br /><br /><br />
                        <Link to='/payment'><button><FaBagShopping /> pay <LiaRupeeSignSolid />{cartTotal}</button></Link>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
export { Checkout }