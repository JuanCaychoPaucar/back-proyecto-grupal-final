import React from 'react';
import AppRouter from './AppRouter';
import AuthState from './modules/auth/context/AuthState';

import AOS from 'aos';

import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  library.add(faCheckSquare, faCoffee, faPowerOff);

  AOS.init();

  return (
    <AuthState>
      <AppRouter />
    </AuthState>
  )
}

export default App;
