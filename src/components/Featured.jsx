import { useNavigate } from 'react-router-dom';

import '../styles/PageStyles.scss';
import img4 from '../assets/images/product-img5.png';
import img5 from '../assets/images/prodimg3.png';
import img6 from '../assets/images/product-img3.png';
import img8 from '../assets/images/prodimg6.png';

const productDetails = [
  {
    img: `${img4}`,
    name: 'Flowers on Sleeves Dress',
    price: 115,
    old_price: 120,
    id: 8,
  },
  {
    img: `${img5}`,
    name: 'Cat-Eye Resin Sunglasses in Clear',
    price: 45,
    old_price: 50,
    id: 9,
  },
  {
    img: `${img8}`,
    name: 'Notte Dot Dress',
    price: 74,
    old_price: 78,
    id: 11,
  },
  {
    img: `${img6}`,
    name: 'Marigold Trouser',
    price: 78,
    old_price: 80,
    id: 12,
  },
];

const Featured = () => {
  const navigate = useNavigate();

  return (
    <div className="featured-section">
      <div className="fey">
        <h1>FEATURED</h1>
      </div>

      <div className="img-section2">
        {productDetails.map((product, index) => {
          return (
            <div
              className="manual"
              key={index}
              id={product.id}
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
              <img src={product?.img} alt="" />

              <div>
                <h1>{product?.name}</h1>
                <h2>${product?.price}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="btn-3">
        <button onClick={() => navigate('/catalog')}>& More New</button>
      </div>
    </div>
  );
};

export default Featured;
