// import React from 'react';
import NavBar from './NavBar.jsx';
import HeroSection from './HeroSection';
import Parks from './Parks';
import Footer from './Footer';
import Featured from './Featured';

import '../styles/PageStyles.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <HeroSection />
      <Parks />
      <Featured />
      <Footer />
    </div>
  );
};

export default LandingPage;
