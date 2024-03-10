import React from 'react';
import Logo from './Logo';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo />
        <div className="logo__text">Testtask</div>
      </div>
      <div className="header-buttons">
        <button className="action-button header-buttons__users">Users</button>
        <button className="action-button header-buttons__sign-up">Sign up</button>
      </div>
    </header>
  );
};

export default Header;