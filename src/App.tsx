import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

export function App(){
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </ BrowserRouter>
  )
}
