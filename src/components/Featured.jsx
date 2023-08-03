import { useNavigate } from 'react-router-dom';

import '../styles/PageStyles.scss';
import img4 from '../assets/images/product-img5.png';
import img5 from '../assets/images/prodimg3.png';
import img6 from '../assets/images/product-img3.png';
import img8 from '../assets/images/prodimg6.png';

const Featured = () => {
  const navigate = useNavigate();

  return (
    <div className="featured-section">
      <div className="fey">
        <h1>FEATURED</h1>
      </div>

      <div className="img-section2">
        <div className="manual">
          <img src={img4} alt="" />

          <div>
            <h1>Flowers on Sleeves Dress</h1>
            <h2>$115</h2>
          </div>
        </div>
        <div className="manual">
          <img src={img5} alt="" />

          <div>
            <h1>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2>$45</h2>
          </div>
        </div>
        <div className="manual">
          <img src={img8} alt="" />

          <div>
            <h1>Notte Dot Dress</h1>
            <h2>$74</h2>
          </div>
        </div>
        <div className="manual">
          <img src={img6} alt="" />

          <div>
            <h1>Marigold Trouser</h1>
            <h2>$78</h2>
          </div>
        </div>
      </div>

      <div className="btn-3">
        <button onClick={() => navigate('/catalog')}>& More New</button>
      </div>
    </div>
  );
};

export default Featured;
