import React from 'react';
import './Navbar.scss';
import { Button } from '../../shared/Button/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <img src="/Logo.svg" alt="" className="header_logo" />
      <nav className="navbar-nav nav">
        <Button type="anchor">Users</Button>
        <Button type="anchor">Sing up</Button>
      </nav>
    </header>
  );
};
