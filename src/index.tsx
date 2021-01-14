import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import profileStore from './stores/data/profileStore';

const stores = {
  profileStore: profileStore()
};

ReactDOM.render(
  <Provider {...stores}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
