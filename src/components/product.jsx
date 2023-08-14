import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/PageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productInfo = location?.state;

  return (
    <div className="product-container">
      <div className="Parks2">
        <h1 className="home">
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Home
          </span>{' '}
          <span
            onClick={() => navigate('/catalog')}
            style={{ cursor: 'pointer' }}
          >
            | Clothing | View All
          </span>{' '}
          | Marigold Trouser
        </h1>
      </div>
      <div className="photos">
        <div className="group1">
          <div className="gallery">
            <div className="imgs">
              <img src={productInfo?.img} alt="" />
              <img src={productInfo?.img} alt="" />
              <img src={productInfo?.img} alt="" />
              <img src={productInfo?.img} alt="" />
              <img src={productInfo?.img} alt="" />
              <img src={productInfo?.img} alt="" />
            </div>
          </div>

          <div className="big-frame">
            <img src={productInfo?.img} alt="" />
            <img src={productInfo?.img} className="big-frame-img" alt="" />
          </div>
        </div>

        <div className="details">
          <div className="marigold">
            <div>
              <FontAwesomeIcon icon={faHeart} />
              <h2>{productInfo?.name}</h2>
            </div>

            <div className="maria">
              <h3>${productInfo?.price}</h3>
            </div>
          </div>
          <div className="old">
            <h4>${productInfo?.old_price}</h4>
          </div>
          <div className="hr">
            <hr />
          </div>

          <div className="wrapper">
            <div className="item-dets">
              <h2>
                High waist pants from J.O.A. with cropped wide legs, pleating on
                the front, and a built-in sash tie on the side. Vertical striped
                pattern. Pleated trim at waist. Slash pockets at hip.
              </h2>
            </div>

            <div className="items-mat">
              <ul>
                <li>Polyester</li>
                <li>Imported</li>
                <li>Wash cold, dry flat</li>
              </ul>
            </div>

            <div className="color">
              <h2>Color: White</h2>
              <h2>Feel: Medium weight silky weave, raised stripe texture</h2>
            </div>

            <div className="size">
              <h3>
                Size <span>*</span>
              </h3>
              <div className="sizes">
                <div>
                  <h1>23</h1>
                </div>
                <div>
                  <h1>24</h1>
                </div>
                <div>
                  <h1>25</h1>
                </div>
                <div>
                  <h1>26</h1>
                </div>
                <div>
                  <h1>27</h1>
                </div>
                <div>
                  <h1>28</h1>
                </div>
                <div>
                  <h1>29</h1>
                </div>
                <div>
                  <h1>30</h1>
                </div>
                <div>
                  <h1>31</h1>
                </div>
                <div>
                  <h1>32</h1>
                </div>
                <div>
                  <h1>33</h1>
                </div>
              </div>

              <div className="bag">
                <h2>30% off the original price</h2>
                <div className="shipping">
                  <FontAwesomeIcon icon={faCube} />
                  <h2>Free Shipping On All U.S. Orders </h2>
                  <a href="#">details</a>
                </div>
                <div className="Bag">
                  <button>Add To Bag</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
