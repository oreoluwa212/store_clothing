import React from 'react';
import NavBar from './NavBar.jsx';
import HeroSection from './HeroSection';
import Parks from './Parks';
import Footer from './Footer';
import Featured from './Featured';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Parks/>
      <Featured/>
      <Footer/>
    </div>
  )
}

export default LandingPage