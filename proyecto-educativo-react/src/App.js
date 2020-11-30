import React from 'react';
import AppRouter from './AppRouter';
import AuthState from './modules/auth/context/AuthState';

import AOS from 'aos';

import "./App.css";

const App = () => {

  AOS.init();

  return (
    <AuthState>
      <AppRouter />
    </AuthState>
  )
}

export default App;
