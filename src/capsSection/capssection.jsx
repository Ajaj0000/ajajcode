import React, { useEffect, useState } from "react";
import { Caps } from "./caps";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import { Filter } from "../common/filter";
import ReactLoading from 'react-loading';
import { theme } from "../common/filter";

function CapsSection() {
    const [value , setvalue] = useState()
    const [isloading, setisloading] = useState(true)

    const [check , setcheck]= useState()
    const getCheck=(e)=>{
        setcheck(e.target.value)
    }

    const getInput=(data)=>{
        setvalue(data)
    }
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
                    </> :
                    <>
                        <Navbar send={getInput}/>
                        <div className="cap-section">
                            <Filter send={getCheck}/>
                            <Caps inputValue = {value} inputCheck={check}/>
                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}
export { CapsSection }