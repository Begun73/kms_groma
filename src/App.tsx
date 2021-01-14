import React from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ThemeSwitcher from './components/ThemeSwitcher'

const themes = {
  light: `${process.env.PUBLIC_URL}/style/light.css`,
  dark: `${process.env.PUBLIC_URL}/style/dark.css`,
};

const App: React.FC = () => {
  return (
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <ThemeSwitcher />
      <Container>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeSwitcherProvider>
  );
};

export default App;
