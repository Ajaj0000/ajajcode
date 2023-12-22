import React, { useState } from "react";
import { Nav } from "../../data/data";
import logo from "../../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Cartsection } from "../../common/cartsection";
import { GiCancel } from "react-icons/gi";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Navbar(props) {


    // const [value , setvalue] = useState()
    const [user] =useAuthState(auth)
    const [toggle, settoggle] = useState(false)
    const { totalUniqueItems } = useCart()
    const [cart, setcart] = useState(false)

    function cartbtn1() {
        setcart(true)
    }
    function cartbtn2() {
        setcart(false)
    }

    function btn1() {
        settoggle(true)
    }
    function btn2() {
        settoggle(false)
    }
    function InputSearch(e){
        // setvalue(e.target.value)
        props.send(e.target.value)
    }


    // const moon1 =document.getElementById("dark-mood1")
    // const moon2 =document.getElementById("dark-mood2")
    // const body =document.getElementById("root")
    //  const click1=()=>{
    //     body.style.backgroundColor="black"
    //     body.style.color="white"
    //     moon1.style.display="none"
    //     moon2.style.display="block"

    //  }
    //  const click2=()=>{
    //     body.style.backgroundColor="white"
    //     body.style.color="black"
    //     moon1.style.display="block"
    //     moon2.style.display="none"
    //  }

    const Logout = () => {
        auth.signOut();
    }


    return (
        <>
            <div className="main-navbar">
                <div className="navbar">
                    <div className="site-logo">
                        <Link to="/home"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="menu-btn">
                        <button style={{ background: "transparent", border: "none", color: "#db2777", fontSize: "30px", }} className={toggle === true ? "display-none" : ""} onClick={btn1}><TiThMenu /></button>
                        <button style={{ background: "transparent", border: "none", color: "#db2777", fontSize: "30px", }} className={toggle === false ? "display-none" : ""} onClick={btn2}><TiThMenu /></button>
                    </div>

                    <div className="main-search">
                        <input type="text" placeholder="Search here" onChange={InputSearch}/>
                        <button><AiOutlineSearch /></button>
                    </div>

                    <div className="head">
                        <ul>
                            <Link to="/tshirt"><li id="n1">
                                T-Shirts<FaAngleDown />
                                <div className="hover-tshirt">
                                    <Link to="/tshirt"><h4>T-Shirts</h4></Link>
                                    <Link to="/polotshirt"><h4>PoloTshirts</h4></Link>
                                    <Link to="/oversized"><h4>OversizedTshirts</h4></Link>
                                </div>
                            </li></Link>

                            {
                                Nav.map((itm) => {
                                    return (
                                        <>
                                            <Link to={itm.path}><li id={itm.id}>{itm.category}</li></Link>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        {/* <Link to="/cart"> */}
                        <p onClick={cartbtn1} className={cart === true ? "display-none" : ""}>
                            <AiOutlineShoppingCart />
                            <span>{totalUniqueItems}</span>
                        </p>
                        <p onClick={cartbtn2} className={cart === false ? "display-none" : ""} style={{ color: "#db2777" }}>
                            <GiCancel />
                            <span>{totalUniqueItems}</span>
                        </p>
                        {/* </Link> */}
                        {
                            user ?  <button onClick={Logout}>Logout</button> : <Link to="/"><button>Login</button></Link>
                           
                        }
                        <span id="dark-mood"><BsMoonStarsFill /></span>
                    </div>
                </div>
            </div>

            {/* toggel slider  */}

            <div className={toggle === true ? "toggle-open" : "toggle"}>
                <ul>
                    <li><button onClick={btn2}>Close</button></li>
                    {
                        Nav.map((itm) => {
                            return (
                                <>
                                    <Link to={itm.path}><li>{itm.category}</li></Link>
                                </>
                            )
                        })
                    }
                </ul>
            </div>

            {/* cart section ............................. */}

            <div className={cart === true ? "cartOn" : "cartoff"}>
                <Cartsection />
                {/* <p onClick={cartbtn2}></p> */}
            </div>


            {/* respomsive content ..................... */}

            <div className="whatsapp">
                <h1><BsWhatsapp /></h1>
            </div>
            <div className="main-head-btn">
                <div className="head-btn">
                    <div className="head-lite">
                        <h2><AiOutlineSearch /></h2>
                        <h2><Link to="/" style={{ color: "black" }}><AiFillHome /></Link></h2>
                        <p onClick={cartbtn1} className={cart === true ? "display-none" : ""}>
                            <AiOutlineShoppingCart />
                            <span>{totalUniqueItems}</span>
                        </p>
                        <p onClick={cartbtn2} className={cart === false ? "display-none" : ""} style={{ color: "#db2777" }}>
                            <GiCancel />
                            <span>{totalUniqueItems}</span>
                        </p>
                        <h2 id="dark-mood" ><BsMoonStarsFill /></h2>
                        <h2><BsFillPersonFill /></h2>
                    </div>
                </div>
            </div>

        </>
    )
}
export { Navbar }