import React from "react";
import { Facility } from "../../data/data";

function Service(){
    return(
        <>
        <div className="facility">
            <div className="facility-lite">
                {
                    Facility.map((data)=>{
                        return(
                            <>
                            <div className="facility-card">
                                <div className="sign">
                                <span>{data.sign}</span>
                                </div>
                                <h3>{data.products}</h3>
                                <p>{data.detail}</p>
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
export{Service}