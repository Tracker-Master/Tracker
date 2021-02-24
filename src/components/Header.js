import React from 'react';
import { Link } from 'react-router-dom';

import {
  Head,
  Logo,
  Image,
  NavButton,
  Navbar,
  Item
} from 'Styles/components/HeaderStyle';

import IconImg from 'Assets/ic_menu.svg';

export const Header = () => {
  return (
    <Head>
        <Logo to='/'>
          <Image src='https://i.imgur.com/TA9nhUj.png' alt='Logo' />
        </Logo>

        <NavButton>
          <Image src={IconImg} alt='navIcon' />
        </NavButton>

        <Navbar>
          <Item>
            <Link to="/">¿Cómo funciona?</Link>
          </Item>
          <Item>
            <Link to="/">Sobre nosotros</Link>
          </Item>
        </Navbar>
    </Head>
  );
};

