// import React from 'react';
import img1 from '../assets/images/red.png';
import img3 from '../assets/images/black.png';

const Parks = () => {
  return (
    <div className="parks-section">
      <div className="parks">
        <h1>PARKS AND RECREATION</h1>
        <a href="#">SHOP NEW</a>
      </div>

      <div className="img-section">
        <div className="img1">
          <img src={img1} alt="" />

          <div className="lean-in">
            <h1>LEANING IN</h1>
            <div>
              <a href="#">SHOP DRESSES</a>
            </div>
          </div>
        </div>

        <div className="img2">
          <img src={img3} alt="" />
          <div className="lean-in">
            <h1>ALL OVER VELVET</h1>
            <div>
              <a href="#">SHOP BACK-IN-STOCK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parks;
