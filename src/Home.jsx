import React from 'react';
import Hero from './components/Hero';
import CustomCreation from './components/CustomCreation';
import Marketplace from './components/Marketplace';
import Offers from './components/Offers';
import WhyUs from './components/WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <CustomCreation />
      <Marketplace />
      <Offers />
      <WhyUs />
    </>
  );
};

export default Home;
