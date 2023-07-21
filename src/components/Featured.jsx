// import React from 'react';
import img4 from '../assets/images/proImg2.png';
import img5 from '../assets/images/prodImg6.png';
import img6 from '../assets/images/product-img3.png';
import img8 from '../assets/images/prodImg6.png';

const Featured = () => {
  return (
    <div>
      <div className="featured">
        <div className="fey">
          <h1>FEATURED</h1>
        </div>
        <div className="img-section2">
          <div className="manual">
            <img width="400px" height="500px" src={img4} alt="" />
            <h1 className="manu">Flowers on Sleeves Dress</h1>
            <h2 className="manua">$115</h2>
          </div>
          <div className="manual1">
            <img width="400px" height="500px" src={img5} alt="" />
            <h1 className="manu">Cat-Eye Resin Sunglasses in Clear</h1>
            <h2 className="manua">$45</h2>
          </div>
          <div className="manual2">
            <img width="400px" height="500px" src={img8} alt="" />
            <h1 className="manu">Notte Dot Dress</h1>
            <h2 className="manua">$74</h2>
          </div>
          <div className="manual3">
            <img width="400px" height="500px" src={img6} alt="" />
            <h1 className="manu">Marigold Trouser</h1>
            <h2 className="manua">$78</h2>
          </div>
        </div>
      </div>

      <div className="btn-3">
        <button>& More New</button>
      </div>
    </div>
  );
};

export default Featured;
