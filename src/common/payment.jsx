import React from "react";
import { useCart } from "react-use-cart";
// import QRCode from 'qrcode'
import { QRCode } from "react-qrcode-logo";


function Pay(){
    
    const {cartTotal} = useCart()

    return(
        <>
        <QRCode value={`upi://pay?pa=8290780903@ibl&pn=lntellemo&tn=cftrhwetaw4gta&am=${cartTotal}`}
                    size="300"
                    logoHeight="300"
                    logoWidth="300"
                />
                
        </>
    )
}
export{Pay}