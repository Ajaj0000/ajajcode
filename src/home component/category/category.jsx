import React, { useRef } from "react";
import { Category } from "../../data/data";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Collection() {
    const ref =useRef(null)
    return (
        <>
        <LoadingBar color="red" ref={ref}/>
            <div className="main-collection">
                <div className="collection0">
                    <h1 onClick={() => ref.current.continuousStart()}>COLLECTIONS</h1>
                </div>
                <div className="select-cat">
                    {
                        Category.map((itm) => {
                            return (
                                <>
                                    <div className="cat-img" key={itm.id}>
                                        <Link to={itm.path}>
                                            <img src={itm.cat} alt="img" />
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
export { Collection }