import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

const productDetails = [
  {
    img: `${img11}`,
    name: 'Cat-Eye Resin Sunglasses in Clear',
    price: 45,
    old_price: 50,
    id: 0,
  },
  {
    img: `${img22}`,
    name: 'Marigold Trouser',
    price: 78,
    old_price: 80,
    id: 1,
  },
  {
    img: `${img33}`,
    name: 'Cat-Eye Resin Sunglasses in Clear',
    price: 45,
    old_price: 50,
    id: 2,
  },
  {
    img: `${img44}`,
    name: 'Marigold Trouser',
    price: 78,
    old_price: 80,
    id: 3,
  },
  {
    img: `${img55}`,
    name: 'Cat-Eye Resin Sunglasses in Clear',
    price: 45,
    old_price: 50,
    id: 4,
  },
  { img: `${img5}`, name: 'Marigold Trouser', price: 78, old_price: 80, id: 5 },
  {
    img: `${img3}`,
    name: 'Cat-Eye Resin Sunglasses in Clear',
    price: 45,
    old_price: 50,
    id: 6,
  },
  { img: `${img1}`, name: 'Marigold Trouser', price: 78, old_price: 80, id: 7 },
];

const Catalogue = () => {
  const navigate = useNavigate();

  return (
    <div className="catalog-wrapper">
      <div className="Parks1">
        <Link to={'/'}>
          <div>Home</div>
        </Link>
        <span>| Catalog</span>
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
        {productDetails.map((product, index) => {
          return (
            <div
              className="img1"
              key={index}
              id={product.id}
              // onClick={() => handleProduct(product)}
              onClick={() =>
                navigate('/product', {
                  state: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    old_price: product.old_price,
                    img: product.img,
                  },
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <img src={product.img} alt="" />
              <div className="lean-in">
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogue;
