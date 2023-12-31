import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styles/PageStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  finese1,
  finese10,
  finese11,
  finese12,
  finese13,
  finese14,
  finese15,
  finese16,
  finese17,
  finese18,
  finese19,
  finese2,
  finese20,
  finese21,
  finese22,
  finese23,
  finese24,
  finese25,
  finese26,
  finese27,
  finese28,
  finese29,
  finese3,
  finese30,
  finese31,
  finese32,
  finese4,
  finese5,
  finese6,
  finese7,
  finese8,
  finese9,
  img1,
  img11,
  img22,
  img3,
  img33,
  img44,
  img5,
  img55,
} from "../assets/images";
import { useState } from "react";

const productDetails = [
  {
    img: `${img11}`,
    name: "Mainet Blazer Jacket",
    price: 115,
    old_price: 250,
    id: 0,
  },
  {
    img: `${img22}`,
    name: "Aunt Polly Red Dress",
    price: 98,
    old_price: 80,
    id: 1,
  },
  {
    img: `${img33}`,
    name: "Kairos Botton-up Shirt",
    price: 245,
    old_price: 450,
    id: 2,
  },
  {
    img: `${img44}`,
    name: "Vanessa Kain Blouse Top",
    price: 678,
    old_price: 780,
    id: 3,
  },
  {
    img: `${img55}`,
    name: "Cottie Blanca Straight Gown",
    price: 345,
    old_price: 500,
    id: 4,
  },
  {
    img: `${img5}`,
    name: "Polly Off Shoulder Dress",
    price: 178,
    old_price: 580,
    id: 5,
  },
  {
    img: `${img3}`,
    name: "Venessa Kain Blouse Top",
    price: 145,
    old_price: 350,
    id: 6,
  },
  {
    img: `${img1}`,
    name: "Kairos Sleeveless Button-up Shirt",
    price: 400,
    old_price: 890,
    id: 7,
  },
  {
    img: `${finese9}`,
    name: "Mainet Blazer Jacket",
    price: 780,
    old_price: 1280,
    id: 8,
  },
  {
    img: `${finese10}`,
    name: "Kairos Long Summer Dress",
    price: 678,
    old_price: 780,
    id: 9,
  },
];
const productDetails1 = [
  {
    img: `${finese1}`,
    name: "Mainet Long Winter Jacket",
    price: 225,
    old_price: 1050,
    id: 0,
  },
  {
    img: `${finese2}`,
    name: "Aunt Polly Parking Shirt",
    price: 800,
    old_price: 1080,
    id: 1,
  },
  {
    img: `${finese3}`,
    name: "Kairos Crop Jacket",
    price: 450,
    old_price: 500,
    id: 2,
  },
  {
    img: `${finese4}`,
    name: "Mainet Blazer Jacket",
    price: 700,
    old_price: 800,
    id: 3,
  },
  {
    img: `${finese5}`,
    name: "Cottie Blanca Shirt Dress",
    price: 295,
    old_price: 350,
    id: 4,
  },
  {
    img: `${finese6}`,
    name: "Mainet Blazer Jacket",
    price: 668,
    old_price: 980,
    id: 5,
  },
  {
    img: `${finese7}`,
    name: "Venessa Kain Wrap Top",
    price: 675,
    old_price: 950,
    id: 6,
  },
  {
    img: `${finese8}`,
    name: "Kairos ROunt Tee",
    price: 782,
    old_price: 800,
    id: 7,
  },
  {
    img: `${finese11}`,
    name: "Kairos Long Summer Dress",
    price: 500,
    old_price: 800,
    id: 8,
  },
  {
    img: `${finese12}`,
    name: "Barbie Collection",
    price: 788,
    old_price: 980,
    id: 9,
  },
];
const productDetails2 = [
  {
    img: `${finese13}`,
    name: "Pretty Little Thing",
    price: 45,
    old_price: 50,
    id: 0,
  },
  {
    img: `${finese14}`,
    name: "Fashionnova Top collection",
    price: 78,
    old_price: 80,
    id: 1,
  },
  {
    img: `${finese15}`,
    name: "Mainet Blazer Jacket",
    price: 45,
    old_price: 50,
    id: 2,
  },
  {
    img: `${finese16}`,
    name: "Vanessa Kain Blouse Top",
    price: 78,
    old_price: 80,
    id: 3,
  },
  {
    img: `${finese17}`,
    name: "Mainet Blazer Jacket",
    price: 45,
    old_price: 50,
    id: 4,
  },
  {
    img: `${finese18}`,
    name: "Mainet Long Jacket",
    price: 78,
    old_price: 80,
    id: 5,
  },
  {
    img: `${finese19}`,
    name: "Kairos Long top",
    price: 45,
    old_price: 50,
    id: 6,
  },
  {
    img: `${finese20}`,
    name: "Kairos Long top",
    price: 78,
    old_price: 80,
    id: 7,
  },
  {
    img: `${finese21}`,
    name: "Mainet Blazer Jacket",
    price: 78,
    old_price: 80,
    id: 8,
  },
  {
    img: `${finese22}`,
    name: "Kairos Crotchet",
    price: 78,
    old_price: 80,
    id: 9,
  },
];
const productDetails3 = [
  {
    img: `${finese23}`,
    name: "Fashionnova Dress",
    price: 45,
    old_price: 50,
    id: 0,
  },
  {
    img: `${finese24}`,
    name: "Fashionnova Dress",
    price: 78,
    old_price: 80,
    id: 1,
  },
  {
    img: `${finese25}`,
    name: "Kairos Track Piece",
    price: 45,
    old_price: 50,
    id: 2,
  },
  {
    img: `${finese26}`,
    name: "Mainet Blazer Jacket",
    price: 78,
    old_price: 80,
    id: 3,
  },
  {
    img: `${finese27}`,
    name: "Barbie Top Collections",
    price: 45,
    old_price: 50,
    id: 4,
  },
  {
    img: `${finese28}`,
    name: "Pretty Little thing",
    price: 78,
    old_price: 80,
    id: 5,
  },
  {
    img: `${finese29}`,
    name: "Venessa Sweatpant",
    price: 45,
    old_price: 50,
    id: 6,
  },
  {
    img: `${finese30}`,
    name: "Kairos Button-up Shirt",
    price: 78,
    old_price: 80,
    id: 7,
  },
  {
    img: `${finese31}`,
    name: "Kairos Button-up Shirt",
    price: 78,
    old_price: 80,
    id: 8,
  },
  {
    img: `${finese32}`,
    name: "Mainet Blazer Jacket",
    price: 78,
    old_price: 80,
    id: 9,
  },
];

const Catalogue = ({ searchValue }) => {
  const navigate = useNavigate();
  const [productPage, setProductPage] = useState(1);
  return (
    <div className="catalog-wrapper">
      <div className="Parks1">
        <Link to={"/"}>
          <div>Home</div>
        </Link>
        <span>| Catalog</span>
      </div>

      <div className="array">
        <div className="num">{productDetails.length} Products</div>

        <div className="sort">
          <div>
            View <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div>
            Sort By <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>

      {productPage === 1 ? (
        <div className="catalog-section">
          {productDetails
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((product, index) => {
              return (
                <div
                  className="img1"
                  key={index}
                  id={product.id}
                  // onClick={() => handleProduct(product)}
                  onClick={() =>
                    navigate("/product", {
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        old_price: product.old_price,
                        img: product.img,
                      },
                    })
                  }
                  style={{ cursor: "pointer" }}
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
      ) : productPage === 2 ? (
        <div className="catalog-section">
          {productDetails1
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((product, index) => {
              return (
                <div
                  className="img1"
                  key={index}
                  id={product.id}
                  // onClick={() => handleProduct(product)}
                  onClick={() =>
                    navigate("/product", {
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        old_price: product.old_price,
                        img: product.img,
                      },
                    })
                  }
                  style={{ cursor: "pointer" }}
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
      ) : productPage === 3 ? (
        <div className="catalog-section">
          {productDetails2
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((product, index) => {
              return (
                <div
                  className="img1"
                  key={index}
                  id={product.id}
                  // onClick={() => handleProduct(product)}
                  onClick={() =>
                    navigate("/product", {
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        old_price: product.old_price,
                        img: product.img,
                      },
                    })
                  }
                  style={{ cursor: "pointer" }}
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
      ) : productPage === 4 ? (
        <div className="catalog-section">
          {productDetails3
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((product, index) => {
              return (
                <div
                  className="img1"
                  key={index}
                  id={product.id}
                  // onClick={() => handleProduct(product)}
                  onClick={() =>
                    navigate("/product", {
                      state: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        old_price: product.old_price,
                        img: product.img,
                      },
                    })
                  }
                  style={{ cursor: "pointer" }}
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
      ) : null}
      <div className="next-btn">
        {productPage > 1 && (
          <p
            onClick={() => {
              setProductPage((prev) => prev - 1);
            }}
          >
            Previous
          </p>
        )}
        <p
          onClick={() => {
            setProductPage(1);
          }}
        >
          1
        </p>
        <p
          onClick={() => {
            setProductPage(2);
          }}
        >
          2
        </p>
        <p
          onClick={() => {
            setProductPage(3);
          }}
        >
          3
        </p>
        <p>4</p>
        {productPage < 4 && (
          <p
            onClick={() => {
              setProductPage((prev) => prev + 1);
            }}
          >
            Next
          </p>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
