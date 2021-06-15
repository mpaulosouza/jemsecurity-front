import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GlobalStyle from './GlobalStyle.js';

import Routes from './routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};
export default App;
