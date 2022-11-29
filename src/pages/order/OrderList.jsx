import "./orderList.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddBox, Edit } from "@mui/icons-material";


import Food from "../../assets/images/food.png";
import Drinks from "../../assets/images/drinks.png";
import Cocktails from "../../assets/images/cocktails.png";
import Cakes from "../../assets/images/cakes.png";
import Pastries from "../../assets/images/pastries.png";
import Pizza from "../../assets/images/pizza.png";

// style for modal
const style = {
  position: "absolute",
  "overflow-x": "hidden",
  "overflow-y": "scroll",
  top: "50%",
  right: "0px",
  transform: "translate(0%, -50%)",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  display: "flex",
  "flex-direction": "column",
};

export default function OrderList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="order">
      <div className="column1">
        <div className="TitleContainer">
          <h2 className="Title">Create An Order</h2>
        </div>

        <div className="search">
          <input type="text" className="searchbox" placeholder="Search For A Product"/>
        </div>

        <div class="box-container">
            <div class="box">
                <img src={Food} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number"  defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Drinks} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number" defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Cocktails} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number" defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Cakes} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number" defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Pastries} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number"defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
            <div class="box">
                <img src={Pizza} alt=""/>
                <div class="dish-name"><h3>tasty food</h3></div>
                <div class="dish-price">$15.99</div>
                <input class="qty-box" type="number" defaultValue={1}/>
                <button className="btn">Add to Cart</button>
            </div>
        </div> 


      </div>
      <div className="column2">
        <div className="columnheader">
          <h2 className="Title">Cart Summary</h2>
        </div>

        <div className="item">
          <div className="name">Item: Rice</div>
          <div className="qty">Quantity: 2</div>
          <div className="subtotal"><span>Subtotal:</span> $35</div>
        </div>

        <div className="item">
          <div className="name">Item: Chicken M/S</div>
          <div className="qty">Quantity: 2</div>
          <div className="subtotal"><span>Subtotal:</span> $35</div>
        </div>

        <div className="item">
          <div className="name"><span>Item:</span> Eggs</div>
          <div className="qty">Quantity: 2</div>
          <div className="subtotal"><span>Subtotal:</span> $35</div>
        </div>


        <div className="totalprice">
          <h2 className="total">Total: $789</h2>
        </div>
        
      </div>
    </div>
  );
}
