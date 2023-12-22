import React from "react";

function Heading(props) {
    return (
        <>
            <div className="main-heading">
                <div className="heading">
                    <h1>{props.head}</h1>
                    <div className="empty"></div>
                </div>
                
            </div>
        </>
    )
}
export { Heading }