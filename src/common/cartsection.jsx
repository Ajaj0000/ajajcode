import React from "react";
import { useCart } from "react-use-cart";
import { GiCancel } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


function Cartsection() {
    const { items, isEmpty, removeItem,cartTotal, updateItemQuantity } = useCart()

    if (isEmpty) {
        return (
            <>
                <div className="cart">
                    <div className="cart-head">
                        <h1>Shopping Cart</h1>
                        {/* <p><GiCancel /></p> */}
                        <p style={{fontSize:"1.7rem"}}><AiOutlineShoppingCart /></p>
                    </div>
                    <div className="cart-empty1">
                    <div className="cart-empty">
                        <p className="p-cart">Your cart is Empty!</p>
                        <div className="cart-bottom2">
                            <h3>Subtotal: {cartTotal}</h3>
                            <button>checkout</button>
                            <button onClick={() => { removeItem(items) }}>clear</button>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="cart">
                <div className="cart-head">
                    <h1>Shopping Cart</h1>
                    <p style={{fontSize:"1.7rem"}}><AiOutlineShoppingCart /></p>
                </div>
                <div className="main-cart">
                    <div className="main-cart2">
                        {
                            items.map((itm) => {
                                return (
                                    <>
                                        <div className="cart-text">
                                            <div className="cart-img-name">
                                                <div className="cart-img">
                                                    <img src={itm.proimg} alt="img" />
                                                    <span>{itm.quantity}</span>
                                                </div>
                                                <div className="cart-detail">
                                                    <h3>{itm.caption}</h3>
                                                </div>
                                            </div>
                                            <div className="btns">
                                                <button onClick={() => { updateItemQuantity(itm.id, itm.quantity + 1) }}>+</button>
                                                <span>{itm.quantity}</span>
                                                <button onClick={() => { updateItemQuantity(itm.id, itm.quantity - 1) }}>-</button>
                                            </div>
                                        </div>
                                        <button style={{ backgroundColor: "#db2777", color: "white", border: "none", fontSize: ".8rem", padding: "5px 10px", borderRadius: "6px" , marginBottom:"15px"}} onClick={() => { removeItem(itm.id) }}>remove</button>
                                    </>
                                )
                            })
                        }
                        <div className="cart-bottom">
                            <h3>Subtotal: <FaIndianRupeeSign/>{cartTotal}</h3>
                            <Link to="/checkout"><button>checkout</button></Link>
                            <button onClick={() => { removeItem(items) }}>clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Cartsection }