import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import React from 'react';

export default ({ children, theme }) => (
  <MuiThemeProvider theme={createTheme(theme)}>{children}</MuiThemeProvider>
);
