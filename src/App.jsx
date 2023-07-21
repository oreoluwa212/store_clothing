import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);



import './App.css'
import LandingPage from './components/LandingPage';
import Catalog from './components/catalogProduct';
import Product from './components/productPage';
import AboutUs from './components/AboutPage/aboutUs';
import NewArrivals from './components/AboutPage/new-arrivals';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/new-arrivals" element={<NewArrivals/>} />

          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
