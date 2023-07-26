import "../styles/PageStyles.scss";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ItemsBag = () => {
  return (
    <div className="items-wrapper">
      <NavBar />

      <div className="items-section">Items Bag</div>

      <Footer />
    </div>
  );
};

export default ItemsBag;
