import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProCaps } from "../data/productData";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Navbar } from "../home component/navbar/navbar";
import { Footer } from "../home component/footer/footer";
import sizeimg from "../productsImages/size img.jpeg"
import Magnifier from "react-magnifier";
import { FaTag } from "react-icons/fa";
import { useCart } from "react-use-cart";
import ReactLoading from 'react-loading';
import { Heading } from "./heading";
import { Selling } from "../data/data";

function Detail() {
    const [isloading, setisloading] = useState(true)
    const { getdetail } = useParams()
    const info = ProCaps.find((itm) => itm.id == getdetail)

    const [getimg, setgetimg] = useState(info.proimg)
    const { addItem, inCart } = useCart()



    const [pinvaluedata, setpinvaluedata] = useState("")
    const [pindata, setpindata] = useState([])
    const [pinfilter, setpinfilter] = useState(null)


    const Pinapi = async () => {
        if (pinvaluedata && pinvaluedata.length > 4) {
            try {
                const res = await fetch(`https://api.postalpincode.in/pincode/${pinvaluedata}`);
                const getdata = await res.json();

                if (getdata && getdata[0].Status === "Success") {
                    const pin = getdata[0].PostOffice;
                    setpindata(pin);
                } else {
                    setpindata([]);
                }
            } catch (error) {
                console.error("Error fetching pincode data:", error);
                setpindata([]);
            }
        }
    };

    // input search 
    const [Allsell, setAllsell] = useState(Selling)
    const [filterSell, setfilterSell] = useState([...Allsell])

    const get = (e) => {
        const inn = e
        const getdata = Allsell.filter((itmm) => itmm.caption.toLowerCase().includes(inn))
        if (inn) {
            setfilterSell(getdata)
        } else {
            setfilterSell(Allsell)
        }
    }

    const changeimg = (a) => {
        // a.preventDefault()
        setgetimg(a)
    }

    useEffect(() => {
        setTimeout(() => {
            setisloading(false)
        }, 1500);
        // return () => clearTimeout(deley)
    }, [])

    const checkout = (e) => {
        e.preventDefault();
        const getepin = pindata.filter((itm) => itm.Name === e.target.value);
        setpinfilter(getepin);
        Pinapi();
    };



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
                        <Navbar send={get} />
                        <div className="information">
                            <div className="detail" key={info.id}>
                                <div className="cap-btn">
                                    <div className="detail-pro" onClick={() => { changeimg(info.proimg) }}>
                                        <img src={info.proimg} alt="img" className="img-btn1" />
                                    </div>
                                    <div className="detail-pro" onClick={() => { changeimg(info.prohoverimg) }}>
                                        <img src={info.prohoverimg} alt="" className="img-btn2" />
                                    </div>
                                    {(info.pro3img) ? <div style={{ border: info.border }} className="detail-pro" onClick={() => { changeimg(info.pro3img) }}>
                                        <img src={info.pro3img} alt="" className="img-btn3" />
                                    </div> : ""}

                                </div>
                                <div className="detail-img">
                                    <div className={`${getimg} dele-img`}>
                                        {/* <img src={info.proimg} alt="" className="dele-img1" /> */}
                                        <Magnifier src={getimg} width={500} className="dele-img1" />
                                    </div>
                                    {/* <div className="dele-img"> */}
                                    {/* <img src={info.pro3img} alt="" className="dele-img2" /> */}
                                    {/* <Magnifier src={info.pro3img} className="dele-img2" />
                        </div>
                        <div className="dele-img"> */}
                                    {/* <img src={info.prohoverimg} alt="" className="dele-img3" /> */}
                                    {/* <Magnifier src={info.prohoverimg} className="dele-img3" />
                        </div> */}
                                </div>
                                <div className="main-detail">
                                    <p className="add">Codeswear</p>
                                    <h1>{info.caption}</h1>
                                    <h4>Product Description:</h4>
                                    <p className="d-pera">{info.proDetail}</p>
                                    <h4>Product Highlights</h4>
                                    <li>{info.highlight1}</li>
                                    <li>{info.highlight2}</li>
                                    <li>{info.highlight3}</li>
                                    <li>{info.highlight4}</li>
                                    <li>{info.highlight5}</li>
                                    <div className="flex-itm">
                                        <h4>Tags: </h4>
                                        <p>{info.tags}</p>
                                    </div>
                                    <div className="flex-itm">
                                        <h4>Color: </h4>
                                        <p>{info.color}</p>
                                    </div>

                                    <div className="date-img">
                                        <img src={info.proimg} alt="img" />
                                    </div>
                                    <div className="flex-itm">
                                        <h4>Size: </h4>
                                        <p className="size">{info.size}</p>
                                    </div>
                                    <div className="bottom-line"></div>

                                    <div className="dele-price">
                                        <h2 className="mrp"><MdOutlineCurrencyRupee />{info.mrp}</h2>
                                        <h2><MdOutlineCurrencyRupee />{info.price}</h2>
                                        <span>(Free Shipping)</span>
                                    </div>










                                    <div className="pincode">

                                        <input type="num" placeholder="Enter your pincode" onChange={(e) => setpinvaluedata(e.target.value)} value={pinvaluedata} />
                                        {/* <p>{pinfilter && pinfilter.DeliveryStatus}</p> */}

                                        <button onClick={checkout}>Check</button>
                                    </div>










                                    <div className="dele-btn">
                                        <button>Buy Now</button>
                                        {inCart(info.id) ? <Link><button>Added</button></Link> : <button onClick={() => { addItem(info) }}>Add to cart</button>}
                                        {/* <button>add to cart</button> */}
                                    </div>
                                    <div className="size-chart">
                                        <h4>Size Chart</h4>
                                        <img src={sizeimg} alt="" />
                                    </div>
                                    <div className="offers">
                                        <h4>Exciting Offer:</h4>
                                        <li><p><FaTag /></p> Get Flat 10% off on all prepaid orders above ₹249 Use coupon <span>CODESWEAR10</span></li>
                                        <li><p><FaTag /></p> Get Customized <span>T-Shirts</span> at only ₹549.</li>
                                        <li><p><FaTag /></p> Buy 2 get 1 Free and buy 3 get 2 Free on all <span>Caps</span> - Prepaid orders only.</li>
                                        <li><p><FaTag /></p> Buy 2 get 1 Free and buy 3 get 2 Free on all <span>Mousepads</span> - Prepaid orders only.</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recommend">
                            <Heading head="Recommended Products" />
                            <div className="sell-products">
                                {
                                    filterSell.map((itm) => {
                                        return (
                                            <>
                                                <div className="sell-card">
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
                                                </div>
                                            </>

                                        )
                                    })
                                }
                            </div>

                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}
export { Detail }

