import React, { useState } from 'react';
import { Container, Item3, Logo, InputSearch, DivSearch, Content, TopHeader, UlRoute } from './styles';
import { FaSearch } from 'react-icons/fa';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ModalLogin from '../ModalLogin';

import logo from '../../assets/logo.svg';
import call from '../../assets/call.svg';
import user from '../../assets/user.svg';
import { useEffect } from 'react';
import MenuStick from '../MenuStiker';

const useStyled = makeStyles({
  button: {
    width: '8vw',
    height: '7vh',

    borderRadius: '0px 35px 35px 0px',

    background: 'linear-gradient(160.74deg, #59A3B9 -14.64%, #76CBDD 23.25%, #59A3B9 62.65%)',
  },
  test1: {
    textDecoration: 'none',
    color: '#407985',
    fontSize: '14px',
  },
  test2: {
    color: '#FEFEFE',
    fontSize: '15px',
  },
  test3: {
    color: '#FEFEFE',
    fontSize: '15px',
    fontWeight: '800',
  },
});

// const MenuStick = () => {
//   console.log('Teste');
//   return (
//     <div>
//       <Typography>Teste</Typography>
//     </div>
//   );
// };

const Header = () => {
  const classe = useStyled();
  const [look, setLook] = useState(false);

  const handleMenuUp = () => {
    return setLook(true);
  };

  const hadleMenuDown = () => {
    return setLook(false);
  };

  useEffect(() => {
    console.log('Aqui');
  }, [look]);

  return (
    <Container>
      <TopHeader>
        <div>
          <ul className="contact">
            <li>
              <img src={call} alt="" />
            </li>
            <li>
              <Typography className={classe.test2}>Call us now</Typography>
            </li>
            <li>
              <Typography className={classe.test3}>(480) 977-3555</Typography>
            </li>
          </ul>
        </div>
        <div>
          <ul className="loginuser">
            <li>
              <Typography className={classe.test2}>Welcome</Typography>
            </li>
            <li>
              <Typography className={classe.test3}></Typography>
            </li>
            <li>
              <img src={user} alt="" />
            </li>
          </ul>
        </div>
      </TopHeader>
      <Content>
        <DivSearch>
          <ul>
            <li>
              <Logo src={logo} />
            </li>
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
          <Router>
            <div>
              <UlRoute>
                <li>
                  <Link className="link" onMouseMove={handleMenuUp} onMouseDown={hadleMenuDown} to="/all">
                    <Typography className={classe.test1}>ALL</Typography>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/about">
                    <Typography className={classe.test1}>ABOLT US</Typography>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/projects">
                    <Typography className={classe.test1}>PROJECTS</Typography>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact">
                    <Typography className={classe.test1}>CONTACT US</Typography>
                  </Link>
                </li>
              </UlRoute>
              <Switch>
                <Route exact path="/all"></Route>
                <Route exact path="/about"></Route>
                <Route exact path="/projects"></Route>
                <Route exact path="/contact"></Route>
              </Switch>
            </div>
          </Router>
          <ModalLogin />
        </Item3>
      </Content>
      {!look ? <MenuStick /> : ''}
    </Container>
  );
};

export default Header;
