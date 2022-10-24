import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Background2 from "../../assets/images/background4.jpg";

const Hero = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="home-hero" style={{ backgroundImage: `url(${Background2})` }}>
            <div className="home-hero-overlay">
              <div className="content">
                <h1>THE FOOD HUB<br /><span> Food &amp; Drinks  |   Pastries  |   Parfaits</span><br /></h1>
                  <div className="desc">
                    The Food Hub is committed to promoting your state of good health. 
                    Count on us for hygienically processed healthy Foods & Drinks, Smoothies & Bites.
                  </div>
                <button class="btn" title="Order Now"> <i class="fa fa-shopping-basket"></i>  ORDER NOW!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
