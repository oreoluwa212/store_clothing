import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img11 from "../assets/images/img1.png";
import img22 from "../assets/images/img2.png";
import img33 from "../assets/images/img3.png";
import img44 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img3 from "../assets/images/img6.png";

const Catalogue = () => {
  return (
    <>
      <div className="Parks-section">
        <div className="Parks1">
          <h1 className="home">
            Home <span>| Catalog</span>
          </h1>
          <a href="#"> SHOP NEW</a>
        </div>
        <div className="array">
          <div className="num">
            <h2>283 Products</h2>
          </div>
          <div className="sort">
            <h2>
              View <FontAwesomeIcon icon={faAngleDown} />
            </h2>
            <h2>
              Sort By <FontAwesomeIcon icon={faAngleDown} />
            </h2>
          </div>
        </div>
        <div className="catalog-section">
          <div className="img1">
            <img className="image" src={img11} alt="" />
            <div className="lean-in">
              <h1 className="manu">Cat-Eye Resin Sunglasses in Clear</h1>
              <h2 className="manua">$45</h2>
            </div>
          </div>
          <div className="img2">
            <img className="image" src={img22} alt="" />
            <div className="lean-in">
              <h1 className="manu">Marigold Trouser</h1>
              <h2 className="manua">$78</h2>
            </div>
          </div>
        </div>
        <div className="catalog-section">
          <div className="img1">
            <img className="image" src={img33} alt="" />
            <div className="lean-in">
              <h1 className="manu">Cat-Eye Resin Sunglasses in Clear</h1>
              <h2 className="manua">$45</h2>
            </div>
          </div>
          <div className="img2">
            <img className="image" src={img44} alt="" />
            <div className="lean-in">
              <h1 className="manu">Marigold Trouser</h1>
              <h2 className="manua">$78</h2>
            </div>
          </div>
        </div>
        <div className="catalog-section">
          <div className="img1">
            <img className="image" src={img11} alt="" />
            <div className="lean-in">
              <h1 className="manu">Cat-Eye Resin Sunglasses in Clear</h1>
              <h2 className="manua">$45</h2>
            </div>
          </div>
          <div className="img2">
            <img className="image" src={img5} alt="" />
            <div className="lean-in">
              <h1 className="manu">Marigold Trouser</h1>
              <h2 className="manua">$78</h2>
            </div>
          </div>
        </div>
        <div className="catalog-section">
          <div className="img1">
            <img className="image" src={img3} alt="" />
            <div className="lean-in">
              <h1 className="manu">Cat-Eye Resin Sunglasses in Clear</h1>
              <h2 className="manua">$45</h2>
            </div>
          </div>
          <div className="img2">
            <img className="image" src={img22} alt="" />
            <div className="lean-in">
              <h1 className="manu">Marigold Trouser</h1>
              <h2 className="manua">$78</h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Catalogue;
