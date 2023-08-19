import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import './App.css';
import LandingPage from './components/LandingPage';
import Catalog from './components/catalogProduct';
import Product from './components/productPage';
import About from './components/About';
import Contact from './components/Contact';
import ItemsBag from './components/ItemsBag';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/items-bag" element={<ItemsBag />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        hideProgressBar={false}
        pauseOnHover
        position="top-right"
        autoClose={4000}
        transition={Zoom}
      />
    </>
  );
}

export default App;
