import React from 'react';

import { Container, Items, Item, Image } from './styled';

import Banner from '../../assets/Banners/Banner.svg';
import Banner1 from '../../assets/Banners/Banner1.svg';
import Banner2 from '../../assets/Banners/Banner2.svg';
import Banner3 from '../../assets/Banners/Banner3.svg';
import Banner4 from '../../assets/Banners/Banner4.svg';

const BannerCoucel = () => {
  return (
    <Container>
      <Items>
        <Item>
          <Image src={Banner} alt="..." />
        </Item>
        <Item>
          <Image src={Banner1} alt="..." />
        </Item>
        <Item>
          <Image src={Banner2} alt="..." />
        </Item>
        <Item>
          <Image src={Banner3} alt="..." />
        </Item>
        <Item>
          <Image src={Banner4} alt="..." />
        </Item>
      </Items>
    </Container>
  );
};

export default BannerCoucel;
