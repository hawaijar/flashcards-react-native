import React from 'react';
import Tabs from './routing/router';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}
