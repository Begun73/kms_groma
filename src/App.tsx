import React from 'react';
import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import NavigationBar from './components/NavigationBar';
import { Navigation } from '@material-ui/icons';

const themes = {
  light: `${process.env.PUBLIC_URL}/style/light.css`,
  dark: `${process.env.PUBLIC_URL}/style/dark.css`,
};

const App: React.FC = () => {
  return (
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <Container maxWidth={false} disableGutters={true}>
        <ThemeSwitcher />
        <NavigationBar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </ThemeSwitcherProvider>
  );
};

export default App;
