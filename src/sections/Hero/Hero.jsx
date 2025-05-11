import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import Splinebg from "./Splinebg/Splinebg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="spline-background">
        <Splinebg />
      </div>
      <div
        className="hero-content"
      >
        <h1 className="hero-title">
        Turning wild ideas into <span>functional websites that impress.</span>
        </h1>
        <p className="hero-subtitle">
        Whether you're launching a startup or refreshing a brand, we turn pixels into profit — no jargon, no fluff.
        </p>
        <a className="cta-button">
          Button 2 <FaArrowRight className="cta-icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
