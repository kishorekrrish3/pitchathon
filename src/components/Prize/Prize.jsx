import React from "react";
import "./Prize.css";

const Prize = () => {
  return (
    <div className="prize" id="section-prizes">
      <div className="prize-bg" />
      <div className="prize-content">
        <h1 className="prize-title">PRIZE POOL</h1>
        <img src="assets/prize-img.png" alt="prize" className="prize-img" />
        <p className="prize-text">₹.50000</p>
      </div>
    </div>
  );
};

export default Prize;
