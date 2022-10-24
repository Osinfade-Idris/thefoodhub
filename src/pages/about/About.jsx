import React from "react";
import "./about.css";
import About1 from '../../assets/images/about-img.png';

import LocalShipping from "@mui/icons-material/LocalShipping";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Headset from "@mui/icons-material/Headset";

export default function About() {
  return (
    <div>

<section class="about" id="about">
        <h3 class="sub-heading">About us</h3>
        <h1 class="heading">Why choose us</h1>
        <div class="row">
            <div class="image">
                <img src={About1} alt=""/>
            </div>
            <div class="content">
                <h3>Best food in the country</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, deserunt at! Maxime nesciunt excepturi doloribus animi non fugiat. Voluptatum, iure omnis fugiat sunt ratione nobis nihil illum maxime est sit?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, eum!</p>
                <div class="icons-container">
                    <div class="icons">
                    <LocalShipping className="icon"/>
                        <span>Free delivery</span>
                    </div>
                    <div class="icons">
                        <AttachMoney className="icon"/>
                        <span>Easy payments</span>
                    </div>
                    <div class="icons">
                    <Headset className="icon"/>
                        <span>24/7 services</span>
                    </div>
                </div>
                <button class="btn">learn more</button>
            </div>
        </div>
    </section>

    </div>




  );
}
