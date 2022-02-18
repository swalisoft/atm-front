import {
Whatsapp
} from '@components/icons';
import {
Button, Navbar
} from '@components/index';
import {
Language
} from '@components/Language';
import {
toggleColorMode
} from '@utils/global';
import React from 'react';

interface InLandingLayout {
  authenticated?: boolean;
  children: JSX.Element | string;
}

const items = [
  // {
  //   path: '#prices',
  //   label: <Language langKey='navPrice' />
  // },
  {
    path: '/about-us',
    label: <Language langKey='navAboutus' />
  },
  {
    path: '/prices',
    label: <Language langKey='navPortfolio' />
  },
  {
    path: '/services',
    label: <Language langKey='navServices' />
  },
  {
    label: <Button
      onClick={toggleColorMode.bind({})}
      type="gradient"
      icon={<Whatsapp size="16" />}
      content="whatsapp" />
  }
];

const LandingLayout = ({children}: InLandingLayout) => {
  return <>
    <Navbar items={items} />
    {children}
    <h1> this is footer </h1>
    <h1> this is footer </h1>
    <h1> this is footer </h1>
    <h1> this is footer </h1>
  </>;
};

export default LandingLayout;
