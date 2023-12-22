import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { ProCaps } from "../data/productData";
// import { ProCaps } from "../data/productData";
// import { Caps } from "../capsSection/caps";

function Filter(props) {
    
    function Getfilter(a){
        props.send(a.target.value)
    }

    const [main, setmain] = useState(false)
    const upbtn = () => {
        setmain(false)
    }
    const downbtn = () => {
        setmain(true)
    }
   
    const theme = [
        {
            id:"f1",
            cat: "Anime",
        },
        {
            id:"f2",
            cat: "Coding",
        },
        {
            id:"f3",
            cat: "Combo",
        },
        {
            id:"f4",
            cat: "Gym",
        },
        {
            id:"f5",
            cat: "Hacking",
        },
        {
            id:"f7",
            cat:"LifeStyle",
        },
        {
            id:"f8",
            cat:"Plain",
        }
        
        
    ]
    const color = [
        {
            id:"c1",
            col: "Black",
        },
        {
            id:"c2",
            col: "Red",
        },
        {
            id:"c3",
            col: "Navblue",
        },
        {
            id:"c4",
            col: "White",
        },
    ]
    return (
        <>
        
        <div className="down-btn">
        <h2 onClick={downbtn}><FaFilter /></h2>
        </div>
            <div className="filter-main">
                <div className="filter">
                    <div className="filter-head">
                        <h1>Filters</h1>
                        <h2><FaFilter /></h2>
                    </div>
                    <div className="empty-line"></div>
                    <div className="theme">
                        <h3 >Theme</h3>
                        {
                            theme.map((data) => {
                                return (
                                    <>
                                        <li>
                                            <div className="check">
                                                <input type="checkbox" id={data.id} />
                                                {/* <label For={data.id} >{data.cat}</label> */}
                                                <p onClick={()=>{Getfilter(`${data.cat}`)}}>{data.cat}</p>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="theme">
                        <h3>Colors</h3>
                        {
                            color.map((data) => {
                                return (
                                    <>
                                        <li>
                                            <div className="check">
                                                <input type="checkbox" id={data.id}/>
                                                <label htmlFor={data.id}>{data.col}</label>
                                                {/* <p>{data.col}</p> */}
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="theme">
                        <h3>Size</h3>
                        <li>
                            <div className="check">
                                <input type="checkbox" id="sia"/>
                                <label htmlFor="sia">L</label>
                                {/* <p>L</p> */}
                            </div>
                        </li>
                    </div>
                    <div className="theme">
                        <button>Apply Filter</button>
                    </div>
                </div>
            </div>


            {/* responsive ........... */}


            <div className={main === true ? "filter res-filter" : "filter res-filter1"}>
                <div className="filter-head">
                    <h1>Filters</h1>
                    <h2 onClick={upbtn}><FaFilter /></h2>
                </div>
                <div className="empty-line"></div>
                <div className="theme">
                    <h3>Theme</h3>
                    {
                        theme.map((data) => {
                            return (
                                <>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                            <p>{data.cat}</p>
                                        </div>
                                    </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="theme">
                    <h3>Colors</h3>
                    {
                        color.map((data) => {
                            return (
                                <>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                            <p>{data.col}</p>
                                        </div>
                                    </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="theme">
                    <h3>Size</h3>
                    <li>
                        <div className="check">
                            <input type="checkbox" />
                            <p>L</p>
                        </div>
                    </li>
                </div>
                <div className="theme">
                    <button>Apply Filter</button>
                </div>
            </div>
        </>
    )
}
export { Filter }
// export{theme}