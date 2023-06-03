import React from "react";
import "./hero.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="heading">Exclusive Handcrafted Items</h1>
        <p className="subheading">Made in India</p>
        <Button
          onClick={() => navigate("/category")}
          className="explore-btn btn"
          type="primary"
        >
          Explore All
        </Button>
      </div>
    </div>
  );
}
