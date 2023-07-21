import React from 'react';
import img4 from "../assets/images/img6.png"
import img5 from "../assets/images/img7.png"
import img6 from "../assets/images/img8.png"
import img8 from "../assets/images/img3.png"
import "../App"


const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className='fey'>
          <h1>FEATURED</h1>
        </div>
        <div className="img-section2">
          <div class="manual">
            <img width="250px" height="500px" src={img4} alt="" />
            <h1 className="manu">Flowers on Sleeves Dress</h1>
            <h2 className='manua'>$115</h2>
          </div>
          <div className="manual1">
            <img width="250px" height="500px" src={img5} alt="" />
            <h1 className='manu'>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2 className='manua'>$45</h2>
          </div>
          <div className="manual2">
            <img width="250px" height="500px" src={img8} alt="" />
            <h1 className='manu'>Notte Dot Dress</h1>
            <h2 className='manua'>$74</h2>
          </div>
          <div className="manual3">
            <img width="250px" height="500px" src={img6} alt="" />
            <h1 className='manu'>Marigold Trouser</h1>
            <h2 className='manua'>$78</h2>
          </div>
        </div>
        <div class="btn-3">
          <button>& More New</button>
        </div>
      </div>
    </>
  );
}

export default Featured