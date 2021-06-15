import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import BannerCourcel from '../../components/BannerCourcel/index.js';
import CouponBar from '../../components/CouponBar';
import Information from '../../components/Information';

const Home = () => {
  return (
    <Container>
      <Header />
      <BannerCourcel />
      <CouponBar />
      <Information />
    </Container>
  );
};

export default Home;
