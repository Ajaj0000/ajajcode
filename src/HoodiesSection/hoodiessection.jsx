import React, { useEffect, useState } from "react";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import { Filter } from "../common/filter";
import { Hoodies } from "./hoodies";
import ReactLoading from 'react-loading';

function HoodiesSection() {
    const [value ,setvalue] =useState()

    function getinput(data){
        setvalue(data)
    }
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1500);
        // return () => clearTimeout(deley)
    }, [])
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
                        <Navbar send={getinput}/>
                        <div className="cap-section">
                            <Filter />
                            <Hoodies inputValue = {value}/>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}
export { HoodiesSection }