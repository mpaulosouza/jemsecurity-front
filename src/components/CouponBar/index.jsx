import React from 'react';

import { Container, Bar, SpanBar, SpanBarTwo } from './styles';

const CouponBar = () => {
  return (
    <Container>
      <Bar>
        <SpanBar>Use your discount coupon right now, and dont miss this opportunity!</SpanBar>
        <SpanBarTwo>COUPON - JEMNEWMEMBER</SpanBarTwo>
      </Bar>
    </Container>
  );
};

export default CouponBar;
