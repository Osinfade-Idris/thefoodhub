import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <section class="footer" id="footer">
        <div class="box-container">
          <div class="box">
            <h3>Location</h3>
            <a>Nigeria</a>
            <a>USA</a>
            <a>UK</a>
            <a>France</a>
          </div>

          <div class="box">
            <h3>Quick links</h3>
            <a>Home</a>
            <a>Dishes</a>
            <a>About</a>
            <a>Menu</a>
          </div>

          <div class="box">
            <h3>Contact links</h3>
            <a>+234-706-957-6909</a>
            <a>idris.osinfade@interswitchgroup.com</a>
            <a>osinfadeidris@gmail.com</a>
            <a>Lagos, Nigeria</a>
          </div>
          <div class="box">
            <h3>Follow us</h3>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Instagram</a>
            <a>Linkedin</a>
          </div>
        </div>
        <div class="credit">
          copyright @ 2022 by <span>Drizzle</span>
        </div>
      </section>
    </div>
  );
}
