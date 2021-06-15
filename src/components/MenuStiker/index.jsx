import React from 'react';
import '@fontsource/montserrat';

import { Container, UlDiv } from './styles';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    fontSize: '12.5px',
    color: '#FEFEFE',
  },
});

const MenuStick = () => {
  const classes = useStyles();

  return (
    <Container>
      <UlDiv>
        <li>
          <Typography className={classes.list}>ALL CATEGORIES</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>NEW PRODUCTS</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>DEAL</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>BRANDS</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>STOCK</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>SUPPORT</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>SHIPPING</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>ORDERING</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>INVOICES</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>SUBSCRIBE</Typography>
        </li>
        <li>
          <Typography className={classes.list}>|</Typography>
        </li>
        <li>
          <Typography className={classes.list}>NEWS</Typography>
        </li>
      </UlDiv>
    </Container>
  );
};

export default MenuStick;
