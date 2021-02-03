import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <AppBar id="BarMenu" position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link to="/" className="site_logo">
          <div className=""></div>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
