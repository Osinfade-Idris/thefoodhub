import React from "react";
import "./menu.css";
import Food from "../../assets/images/food.png";
import Drinks from "../../assets/images/drinks.png";
import Cocktails from "../../assets/images/cocktails.png";
import Cakes from "../../assets/images/cakes.png";
import Pastries from "../../assets/images/pastries.png";
import Pizza from "../../assets/images/pizza.png";
import Shawarma from "../../assets/images/shawarma.png";
import Soups from "../../assets/images/soups.png";



export default function Dishes() {
  return (
    <div>
      <section class="dishes" id="menu">
        <div class="first-link-full-div">
          <div class="title-div">
            <h2>Menu Categories</h2>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Food} alt="Phones & Parts" />
              </div>
              <div class="text">
                <h3>Food</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Drinks} alt="Computer Accessories" />
              </div>
              <div class="text">
                <h3>Drinks</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Pastries} alt="Bluetooths Devices" />
              </div>
              <div class="text">
                <h3>Pastries</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Soups} alt="Cameras" />
              </div>
              <div class="text">
                <h3>Soup Bowls</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Pizza} alt="Storage Devices" />
              </div>
              <div class="text">
                <h3>Pizza</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Shawarma} alt="Power Banks" />
              </div>
              <div class="text">
                <h3>Shawarma</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Cakes} alt="Kids Tablets" />
              </div>
              <div class="text">
                <h3>Cakes</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>

          <div class="first-link-back">
            <div class="div">
              <div class="pix">
                <img src={Cocktails} alt="Tools/Accessories" />
              </div>
              <div class="text">
                <h3>Cocktails & Parfaits</h3>
              </div>
              <button class="btn" title="Place Order">
                <i class="fa fa-shopping-basket"></i> Place Order
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
