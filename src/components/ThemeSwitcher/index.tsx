import React from 'react';
import {
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

import { useThemeSwitcher } from 'react-css-theme-switcher';

const ThemeSwitcher: React.FC = () => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          id="Switcher"
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
          onChange={toggleDarkMode}
        />
      </FormGroup>
    </FormControl>
  );
};

export default ThemeSwitcher;
