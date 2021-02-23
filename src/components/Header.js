import React from 'react';

import {
  Head,
  Logo,
  Image,
  NavButton
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
    </Head>
  );
};

