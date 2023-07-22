import { Link } from 'react-router-dom';

import '../styles/PageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import img11 from '../assets/images/prodimg3.png';
import img1 from '../assets/images/product-img3.png';
import img22 from '../assets/images/prodimg1.png';
import img33 from '../assets/images/prodimg6.png';
import img44 from '../assets/images/product-img4.png';
import img55 from '../assets/images/prodImg8.png';
import img5 from '../assets/images/black.png';
import img3 from '../assets/images/proImg2.png';

const Catalogue = () => {
  return (
    <div className="catalog-wrapper">
      <div className="Parks1">
        <Link to={'/'}>
          <div>Home</div>
        </Link>
        <span>| Catalog</span>
        {/* <a href="#"> SHOP NEW</a> */}
      </div>

      <div className="array">
        <div className="num">283 Products</div>

        <div className="sort">
          <div>
            View <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>
            Sort By <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>

      <div className="catalog-section">
        <div className="img1">
          <img src={img11} alt="" />
          <div className="lean-in">
            <h1>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2>$45</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img22} alt="" />
          <div className="lean-in">
            <h1>Marigold Trouser</h1>
            <h2>$78</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img33} alt="" />
          <div className="lean-in">
            <h1>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2>$45</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img44} alt="" />
          <div className="lean-in">
            <h1>Marigold Trouser</h1>
            <h2>$78</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img55} alt="" />
          <div className="lean-in">
            <h1>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2>$45</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img5} alt="" />
          <div className="lean-in">
            <h1>Marigold Trouser</h1>
            <h2>$78</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img3} alt="" />
          <div className="lean-in">
            <h1>Cat-Eye Resin Sunglasses in Clear</h1>
            <h2>$45</h2>
          </div>
        </div>
        <div className="img1">
          <img src={img1} alt="" />
          <div className="lean-in">
            <h1>Marigold Trouser</h1>
            <h2>$78</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
