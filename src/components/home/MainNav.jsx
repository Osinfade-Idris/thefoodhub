import React from "react";
import "./mainNav.css";
import { Link } from "react-router-dom";
import DensityMedium from "@mui/icons-material/DensityMedium";
import Person4 from "@mui/icons-material/Person4";
import ShoppingCart from "@mui/icons-material/ShoppingCart";


export default function MainNav() {
  return (
    <header>
      <div className="HeaderWrapper">
        <a href="./" class="logo">
          TheFoodHub
        </a>
        <div class="navbar">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#dishes">Dishes</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>

          <Link to="/apply">
            <a>Careers</a>
          </Link>
          
   

          <div class="icons">
            <div className="HeaderIcon">
              <DensityMedium className="icon" id="menu-bar"/>
            </div>


            <div className="HeaderIcon">
              <Person4 className="icon"/>
            </div>

           
            <div className="HeaderIcon">
              <ShoppingCart className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </header>




  );
}
