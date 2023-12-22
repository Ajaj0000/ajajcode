import React, { useEffect, useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Selling } from "../../data/data";

function Sell(props) {

    const [Alldata ,setAlldata] =useState(Selling)
    const [filterdata ,setfilterdata] = useState([...Alldata])

    useEffect(()=>{
        if(props.inputValue !== " "){
            get(props.inputValue)
        }else if(props.inputValue === 0){
            setAlldata(Alldata)
        }else{
            setAlldata(Alldata)
        }
    },[props.inputValue])

    const get=(e)=>{
        const inn = e
        const getdata = Alldata.filter((itmm)=>itmm.caption.toLowerCase().includes(inn))
        if(inn){
            setfilterdata(getdata)
        }else{
            setfilterdata(Alldata)
        }
    }

    return (
        <>
            <div className="sell-products">
                {
                    filterdata.map((itm) => {
                        return (
                            <>
                                <div className="sell-card">
                                    <div className="sell-img">
                                        <img src={itm.proimg} alt="img" className="img1" id={itm.id}/>
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
                                </div>
                            </>

                        )
                    })
                }
            </div>

        </>
    )
}
export { Sell }