import React from "react";
import "./BackToTop.css";

const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      <div onClick={scrollToTop} className="back-top-container">
        Back To Top
      </div>
    </div>
  );
};

export default BackToTop;
