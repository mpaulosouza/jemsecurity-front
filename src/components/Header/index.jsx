import React from 'react';
import { Container, Item1, Item3, Logo, InputSearch, DivSearch } from './styles';
import { FaSearch } from 'react-icons/fa';
import { Button, makeStyles } from '@material-ui/core';

import ModalLogin from '../ModalLogin';

import logo from '../../assets/logo.svg';

const useStyled = makeStyles({
  button: {
    width: '10vw',
    height: '9vh',

    borderRadius: '0px 35px 35px 0px',

    background: 'linear-gradient(160.74deg, #59A3B9 -14.64%, #76CBDD 23.25%, #59A3B9 62.65%)',
  },
});

const Header = () => {
  const classe = useStyled();

  return (
    <Container>
      <Item1>
        <Logo src={logo} />
      </Item1>
      <DivSearch>
        <ul>
          <li className="li1">
            <InputSearch type="text" placeholder="Search.." />
          </li>
          <li>
            <Button
              startIcon={<FaSearch style={{ color: '#FDD028', width: '30.42', height: '30.42' }} />}
              className={classe.button}
            />
          </li>
        </ul>
      </DivSearch>
      <Item3>
        <ModalLogin />
      </Item3>
    </Container>
  );
};

export default Header;
