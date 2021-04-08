import React from 'react';
import { Container } from './styles';

import NavButton from './NavButton';
import Logo from './Logo';

export default function Header() {
  return (
    <Container>
      <Logo />

      <div>
        <NavButton to='/about'>About</NavButton>
      </div>
    </Container>
  )
}