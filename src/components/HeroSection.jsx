import { Link } from 'react-router-dom';
import '../styles/PageStyles.scss';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="elevate">
        <h1>ELEVATE YOUR WARDROBE</h1>

        <div className="elevate-sub">
          <p className="trendy">Shop Our Trendy Fashion</p>
          <div>
            <Link to={"/catalog"}>
              <button className="input-btn">Go to Catalog</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="circles">
        <div className="black"></div>
        <div className="grey1"></div>
        <div className="grey2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
