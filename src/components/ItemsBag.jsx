import "../styles/PageStyles.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";
import img1 from "../assets/images/black.png"
import img2 from "../assets/images/red.png"

const ItemsBag = () => {
  return (
    <div className="items-wrapper">
      <NavBar />

      <div className="items-section">
        <div className="items-section1">
          <h1>Your Shopping Bag</h1>
          <table>
            <thead>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td>Qty</td>
              <td>Subtotal</td>
            </thead>
            <tr>
              <td>
                <div className="jole">
                  <img src={img1} alt="" />
                  <div>
                    <p>Flowers on Sleeves Dress</p>
                    <p>Size: 24</p>
                  </div>
                </div>
              </td>
              <td>$78.00</td>
              <td>-</td>
              <td>$78.00</td>
            </tr>
            <tr>
              <td>
                <div className="jole">
                  <img src={img2} alt="" />
                  <div>
                    <p>Flowers on Sleeves Dress</p>
                    <p>Size: 24</p>
                  </div>
                </div>
              </td>
              <td>$78.00</td>
              <td>-</td>
              <td>$78.00</td>
            </tr>
          </table>
        </div>

        <div className="items-section2">
          <h2>Summary</h2>
          <hr />
          <h2>Estimate Shipping and Tax</h2>
          <input
            className="destination"
            type="text"
            placeholder="Enter your destination to get a shipping estimate."
          />
          <h2>State/Province</h2>
          <input className="state" type="text" placeholder="State/Province" />
          <h2>Zip/Postal Code</h2>
          <input className="state" type="text" placeholder="2100038" />
          <hr />
          <div className="total">
            <div className="subtotal">
              <h1>Subtotal</h1>
              <p>$156.00</p>
            </div>
            <div className="subtotal">
              <h1>
                Shipping (In-Store Pickup - Brooklyn, NY (198 Smith Street))
              </h1>
              <p>$0.00</p>
            </div>
            <div className="subtotal">
              <h1>Order Total</h1>
              <p>$156.00</p>
            </div>
            <hr />

            <h3>Apply Discount Code</h3>
            <h4>Enter discount code</h4>

            <input
              className="discount"
              type="text"
              placeholder="Enter discount code"
            />

            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemsBag;
