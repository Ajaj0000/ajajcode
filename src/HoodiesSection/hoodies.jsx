import React, { useEffect, useState } from "react";
import { Prohoodies } from "../data/productData";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

function Hoodies(props){
    const [Allpro, setAllpro] = useState(Prohoodies)
    const [filterAll , setfilterAll] = useState([...Allpro])

    useEffect(()=>{
        if(props.inputValue !== " "){
            get(props.inputValue)
        }else if(props.inputValue === 0){
            setAllpro(Allpro)
        }
        else{
            setAllpro(Allpro)
        }
    },[props.inputValue])


    const get =(e)=>{
        const inn = e
        const Hdata = Allpro.filter((itmm)=>itmm.caption.toLowerCase().includes(inn) || itmm.price.toPrecision().includes(inn))
        // const Hprice = Allpro.filter((itmm)=>itmm.price.toPrecision().includes(inn))
        if(inn){
            setfilterAll(Hdata)
            // setfilterAll(Hprice)
        }else{
            setfilterAll(Allpro)
        }
    }
    
    return(
        <>
        <div className="main-cap">
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
                        filterAll.map((itm) => {
                            return (
                                <>
                                    <div className="sell-card" key={itm.id}>
                                        <Link to={`detail/${itm.id}`}>
                                            <div className="sell-img">
                                                <img src={itm.proimg} alt="img" className="img1" id={itm.id} />
                                                <img src={itm.prohoverimg} alt="img" className="hover-img" id={itm.id} />
                                            </div>
                                            <div className="mrp">
                                                <div className="mrp-lite">
                                                    <div className="sell-text">
                                                        <h5>{itm.proname}</h5>
                                                        <h4>{itm.caption}</h4>
                                                    </div>
                                                    <div className="sell-price">
                                                        <h5><span><MdOutlineCurrencyRupee /></span>{itm.mrp}</h5>
                                                        <h4><span><MdOutlineCurrencyRupee /></span>{itm.price}</h4>
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
        </>
    )
}
export{Hoodies}