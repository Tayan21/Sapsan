import React from 'react';

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Snickers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>6000тг</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
    );
};

export default Header;