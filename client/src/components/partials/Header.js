import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>
  {
    return (

      <div className="header">
        <h1> Mern Drag'n'Drop Files </h1>

        <nav>
          <NavLink activeClassName="active" to="/" exact={ true }> Home </NavLink>

          <NavLink activeClassName="active" to="/files"> Files List </NavLink>
        </nav>
      </div>

    );
  };

export default Header;