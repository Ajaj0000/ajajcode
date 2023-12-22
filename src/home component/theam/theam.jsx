import React from "react";
import { Theam } from "../../data/data";

function Custom(){
    return(
        <>
        <div className="main-collection">
                <div className="collection0">
                    <h1>THEMES</h1>
                </div>
                <div className="select-cat">
                    {
                        Theam.map((itm) => {
                            return (
                                <>
                                    <div className="cat-img" key={itm.id}>
                                        <img src={itm.theam} alt="img" />
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
export{Custom}