import '../styles/PageStyles.scss';
import NavBar from './NavBar';
import Footer from './Footer';

const NewArrivals = () => {
  return (
    <div>
      <NavBar />

      <div className="links3">
        <div className="express">
          <i className="fa-solid fa-cube"></i>
          <h1>FREE EXPRESS SHIPPING</h1>
          <h2>On all orders, no minimum</h2>
        </div>
        <div className="duties">
          <i className="fa-solid fa-check"></i>
          <h2>DUTIES AND TAXES GUARANTEED</h2>
          <h2>On all orders, no minimum</h2>
        </div>
        <div className="custome-love">
          <i className="fa-regular fa-envelope"></i>
          <h1>CUSTOMER LOVE</h1>
          <h2>We got you via phone, email or text</h2>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewArrivals;
