import React from "react";
import logo from "../../images/logo.png"
import pay from "../../images/pay.png"

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="foot-logo">
                    <div className="f-logo">
                        <div className="f-logo-lite">
                        <img src={logo} alt="img" />
                        </div>
                    </div>
                    <p>Wear the code</p>
                    <p>Premium coding tshirts, hoodies and apparals</p>
                </div>
                <div className="foot-logo">
                    <h4>Shop</h4>
                    <ul>
                        <li>T-shirts</li>
                        <li>Sweatshits</li>
                        <li>Hoodies</li>
                        <li>Zipper Hoodies</li>
                        <li>Mugs</li>
                    </ul>
                </div>
                <div className="foot-logo">
                    <h4>Customer Service</h4>
                    <ul>
                        <li>Contect us</li>
                        <li>About  us</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
                <div className="foot-logo">
                    <h4>Policy</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and condition</li>
                    </ul>
                </div>
                <div className="foot-logo">
                    <div className="payment">
                        <img src={pay} alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export { Footer }