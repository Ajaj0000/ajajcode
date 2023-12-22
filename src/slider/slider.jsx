import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'animate.css'
import { SlArrowRight } from "react-icons/sl";
import slider1 from "../images/6.webp"
import slider2 from "../images/1.webp"
import slider3 from "../images/2.webp"
import slider4 from "../images/3.webp"
import slider5 from "../images/4.webp"
import slider6 from "../images/5.webp"
import { Link } from "react-router-dom";


function Slider() {
    return (
        <>
            <div className="send-msg">
                <div className="msg">
                    <h4 className="animate__animated animate__flash animate__slower animate__infinite">New</h4>
                    <h5>Get custom designed products by sending us a text on whatsapp <SlArrowRight/></h5>
                    
                </div>
            </div>
            <Carousel autoPlay="true" interval={3000} infiniteLoop="true">
                <div>
                    <img src={slider1} alt="" />
                </div>
                <div>
                    <img src={slider2} alt="" />
                </div>
                <div>
                    <img src={slider3} alt="" />
                </div>
                <div>
                    <img src={slider4} alt="" />
                </div>
                <div>
                    <img src={slider5} alt="" />
                </div>
                <div>
                    <img src={slider6} alt="" />
                </div>
            </Carousel>
            <div className="slider0">
                <Link to="/caps"><button className="animate__animated animate__backInUp">Shop now</button></Link>
            </div>

        </>
    )
}
export { Slider }