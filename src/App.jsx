import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import './App.css';
import LandingPage from './components/LandingPage';
import Catalog from './components/catalogProduct';
import Product from './components/productPage';
// import NewArrivals from './components/NewArrivals';
import About from './components/About';
// import LoginPage from './components/loginPage';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<About />} />
          {/* <Route path="/new-arrivals" element={<NewArrivals />} /> */}

          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
