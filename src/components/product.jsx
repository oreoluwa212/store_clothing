import React from "react";
import "../App";
import productimg1 from "../assets/images/img4.png"
import productimg2 from "../assets/images/img5.png"

const Product = () => {
  return (
    <>
      <div className="Parks2">
        <h1 className="home">
          Home | Clothing | View All <span>| Marigold Trouser</span>
        </h1>
      </div>
      <div className="photos">
        <div className="gallery">
          <div className="imgs">
            <img src={productimg1} height={150} alt="" />
            <img src={productimg2} height={150} alt="" />
            <img src={productimg1} height={150} alt="" />
            <img src={productimg2} height={150} alt="" />
            <img src={productimg1} height={150} alt="" />
            <img src={productimg2} height={150} alt="" />
          </div>
        </div>

        <div className="big-frame">
          <img src={productimg1} width={500} height={900} alt="" />
          <img src={productimg2} width={500} height={400} alt="" />
        </div>

        <div className="details">
          <div className="marigold">
            <div>
              <i class="fa-regular fa-heart"></i>
              <h2>Marigold Trouser</h2>
            </div>

            <div className="maria">
              <h3>$78.00</h3>
            </div>
          </div>
          <div className="old">
            <h4>$80.00</h4>
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
                  <i class="fa-solid fa-cube"></i>
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
    </>
  );
};

export default Product