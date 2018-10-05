import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Sidebar from './components/sidebar/index';
import HeaderBar from './components/HeaderBar';
import Router from './Router';

import AppTheme from './styles';
import './styles/global';

const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
`;

const theme = createMuiTheme({
  palette: {
    primary: { main: AppTheme.colors.affirmative },
    secondary: { main: AppTheme.colors.white },
  },
});

const Root = (): Object => (
  <MuiThemeProvider
    theme={theme}
  >
    <ThemeProvider
      theme={AppTheme}
    >
      <Wrapper>
        <Sidebar />
        <HeaderBar />
        <Router />
      </Wrapper>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default Root;