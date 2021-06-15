import React from 'react';
import { Container } from './styles';

import HeaderLogin from '../../components/HeaderLogin';
import BannerCourcel from '../../components/BannerCourcel/index.js';
import CouponBar from '../../components/CouponBar';
import Information from '../../components/Information';

const HomeLogin = () => {
  return (
    <Container>
      <HeaderLogin />
      <BannerCourcel />
      <CouponBar />
      <Information />
    </Container>
  );
};

export default HomeLogin;
