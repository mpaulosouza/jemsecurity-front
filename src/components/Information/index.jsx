import React from 'react';
import Divider from '@material-ui/core/Divider';

import { Container, DivInformation } from './styles';

import Shop from '../../assets/Shop.svg';
import Support from '../../assets/Support.svg';
import Stock from '../../assets/Stock.svg';
import Invoices from '../../assets/Invoices.svg';

const Information = () => {
  return (
    <Container>
      <DivInformation>
        <div style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '20%' }}>
          <span style={{ fontSize: '16px', fontFamily: 'Monserrat, sans-serif', fontWeight: '600', color: '#194A59' }}>
            Free Shipping
          </span>
          <br />
          <br />
          <span style={{ fontSize: '14px', fontFamily: 'Monserrat, sans-serif', fontWeight: '400', color: '#194A59' }}>
            Free ground shipping
            <br />
            on online orders over
            <br />
            $150 to US & $1000 to CA
          </span>
        </div>
        <Divider orientation="vertical" />
        <div style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '20%' }}>
          <img style={{ width: '41.72px', height: '41.72' }} src={Shop} alt="..." />
          <br />
          <br />
          <span style={{ fontSize: '16px', fontFamily: 'Monserrat, sans-serif', fontWeight: '600', color: '#194A59' }}>
            Shop & Receive
          </span>
          <br />
          <br />
          <span style={{ fontSize: '14px', fontFamily: 'Monserrat, sans-serif', fontWeight: '400', color: '#194A59' }}>
            Security from the
            <br />
            time of purchase to
            <br />
            the time of receiving
          </span>
        </div>
        <Divider orientation="vertical" />
        <div style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '20%' }}>
          <img style={{ width: '39.72px', height: '39.73px' }} src={Support} alt="..." />
          <br />
          <br />
          <span style={{ fontSize: '16px', fontFamily: 'Monserrat, sans-serif', fontWeight: '600', color: '#194A59' }}>
            Website Support
          </span>
          <br />
          <br />
          <span style={{ fontSize: '14px', fontFamily: 'Monserrat, sans-serif', fontWeight: '400', color: '#194A59' }}>
            How to navigate the
            <br />
            Digital Branch to find
            <br />
            What you need
          </span>
        </div>
        <Divider orientation="vertical" />
        <div style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '20%' }}>
          <img style={{ width: '32.65px', height: '37.51' }} src={Stock} alt="..." />
          <br />
          <br />
          <span style={{ fontSize: '16px', fontFamily: 'Monserrat, sans-serif', fontWeight: '600', color: '#194A59' }}>
            See What’s in Stock
          </span>
          <br />
          <br />
          <span style={{ fontSize: '14px', fontFamily: 'Monserrat, sans-serif', fontWeight: '400', color: '#194A59' }}>
            See real-time, in-stock
            <br />
            products and quantities
            <br />
            that we have quickly
          </span>
        </div>
        <Divider orientation="vertical" />
        <div style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '20%' }}>
          <img style={{ width: '39.48px', height: '33.16' }} src={Invoices} alt="..." />
          <br />
          <br />
          <span style={{ fontSize: '16px', fontFamily: 'Monserrat, sans-serif', fontWeight: '600', color: '#194A59' }}>
            Ordering & Invoices
          </span>
          <br />
          <br />
          <span style={{ fontSize: '14px', fontFamily: 'Monserrat, sans-serif', fontWeight: '400', color: '#194A59' }}>
            Get help with orders,
            <br />
            invoices and statements
            <br />
            to make it easier for you
          </span>
        </div>
      </DivInformation>
    </Container>
  );
};

export default Information;
