import React from "react";
import "./dishes.css";
import Food from "../../assets/images/food.png";
import Drinks from "../../assets/images/drinks.png";
import Cocktails from "../../assets/images/cocktails.png";
import Cakes from "../../assets/images/cakes.png";
import Pastries from "../../assets/images/pastries.png";
import Pizza from "../../assets/images/pizza.png";

export default function Dishes() {
  return (
    <div>

    <section class="dishes" id="dishes">
     <h3 class="sub-heading"> Our dishes</h3>
     <h1 class="heading">Popular dishes</h1>  
        <div class="box-container">
            <div class="box">
                <img src={Food} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Drinks} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Cocktails} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Cakes} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Pastries} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Pizza} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <button className="btn">Add to Cart</button>
            </div>
        </div> 
    </section>

    </div>




  );
}
