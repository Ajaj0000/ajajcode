import React, { useEffect, useState } from "react";
import { Slider } from "../slider/slider";
import { Collection } from "../home component/category/category";
import { Custom } from "../home component/theam/theam";
import { Heading } from "../common/heading";
import { Sell } from "../home component/best sell/bestsell";
import { Service } from "../home component/facility/facility";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import ReactLoading from 'react-loading';

function Home() {
    const [value , setvalue] =useState()

    const getInput=(data)=>{
        setvalue(data)
    }
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1000)
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
                        <Navbar send = {getInput}/>
                        <Slider />
                        <Collection />
                        <Custom />
                        <Heading head="Bestselling Products" />
                        <Sell inputValue = {value}/>
                        <Service />
                        <Footer />
                    </>
            }
        </>
    )
}
export { Home }