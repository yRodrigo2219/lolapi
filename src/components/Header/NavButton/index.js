import React from 'react';
import { Nav } from './styles';

export default function NavButton(props) {
  const children = props.children;
  const to = props.to;

  return (
    <Nav to={to}>{children}</Nav>
  );
}