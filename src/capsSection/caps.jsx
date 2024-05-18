import React, { useEffect, useState } from "react";
import { ProCaps } from "../data/productData";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Caps(props) {
    
    const [card, setcard] = useState(ProCaps)
    const [filterr, setfilterr] = useState([...card])

    useEffect(() => {
        if (props.inputValue !== " ") {
            data(props.inputValue)
        } else if (props.inputValue === 0) {
            setcard(card)
        } else {
            setcard(card)
        }
    }, [props.inputValue])

    const data = (e) => {
        const inpp = e
        const getdata = card.filter((itmm)=>{return itmm.caption.toLowerCase().includes(inpp) || itmm.price.toLocaleString().includes(inpp)})
        
        if (inpp) {
            setfilterr(getdata)
        } else {
            setfilterr(card)
        }
    }

    useEffect(() => {
        if (props.inputCheck !== " ") {
            category(props.inputCheck)
        } else if (props.inputCheck === 0) {
            setcard(card)
        } else {
            setcard(card)
        }
    }, [props.inputCheck])

    const category = (a) => {
        const inp = a
        const getcheck = card.filter((ft) => ft.category == inp)
        if (inp) {
            setfilterr(getcheck)
        } else {
            setfilterr(card)
        }
    }
ononline=()=>{
    toast.success("you are online")
}
onoffline=()=>{
    toast.error("No Internet Connection")
}

    return (
        <>
            <div className="main-cap" >
                <div className="caps">
                    <div className="caps-head">
                        <h1>Explore Our Caps Collection</h1>
                        <div className="caps-pera">
                            <p>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you!</p>
                        </div>
                    </div>
                </div>
                <div className="sell-products">
                    {
                        filterr.map((currentele) => {
                            return (
                                <>
                                    <div className="sell-card" key={currentele.id}>
                                        <Link to={`detail/${currentele.id}`}>
                                            <div className="sell-img">
                                                <img src={currentele.proimg} alt="img" className="img1" id={currentele.id} />
                                                <img src={currentele.prohoverimg} alt="img" className="hover-img" id={currentele.id} />
                                            </div>
                                            <div className="mrp">
                                                <div className="mrp-lite">
                                                    <div className="sell-text">
                                                        <h5>{currentele.proname}</h5>
                                                        <h4>{currentele.caption}</h4>
                                                    </div>
                                                    <div className="sell-price">
                                                        <h5><span><MdOutlineCurrencyRupee /></span>{currentele.mrp}</h5>
                                                        <h4><span><MdOutlineCurrencyRupee /></span>{currentele.price}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            {/* <Detail ProCaps = {ProCaps}/> */}
        </>
    )
}
export { Caps }