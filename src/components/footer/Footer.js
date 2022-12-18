import React from "react";
import logoPng from "./../../Amazon_Logo.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footerMain">
        <div className="footer_section">
          <h3>Get to Know Us</h3>
          <button>About Us</button>
          <button>Careers</button>
          <button>Press Releases</button>
          <button>Amazon Science</button>
        </div>
        <div className="footer_section">
          <h3>Connect with Us</h3>
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Press Releases</button>
          <button>Amazon Science</button>
        </div>
        <div className="footer_section">
          <h3>Make Money with Us</h3>
          <button>Sell on Amazon</button>
          <button>Sell under Amazon Accelerator</button>
          <button>Protect and Build Your Brand</button>
          <button>Amazon Global Selling</button>
          <button>Become an Affiliate</button>
          <button>Fulfilment by Amazon</button>
          <button>Advertise Your Products</button>
          <button>Amazon Pay on Merchants</button>
        </div>
        <div className="footer_section">
          <h3>Let Us Help You</h3>
          <button>COVID-19 and Amazon</button>
          <button>Your Account</button>
          <button>Returns Centre</button>
          <button>100% Purchase Protection</button>
          <button>Amazon App Download</button>
          <button>Amazon Assistant Download</button>
          <button>Help</button>
        </div>
      </div>
      <div className="footerLast">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </div>
    </>
  );
}

export default Footer;
