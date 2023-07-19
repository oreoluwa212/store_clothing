import React from 'react'
import hero from "../assets/images/hero.png"

const HeroSection = () => {
  return (
    <>
      <div className="section1">
        <div class="elevate">
          <h1>ELEVATE YOUR WARDROBE</h1>
          <div className="elevate-sub">
            <p class="Trendy">Shop Our Trendy Fashion</p>
            <button class="input-btn">Go to Catalog</button>
          </div>
        </div>
        <div className="circles">
          <div className="black"></div>
          <div className="grey1"></div>
          <div className="grey2"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection