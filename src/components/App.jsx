import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import Feedback from './feedback/Feedback';
import Header from './header/Header';
import Headline from './headline/Headline';
import UsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <main className="page">
        <Header />
        <Headline />
        <UsersList />
        <Feedback />
      </main>
    </Provider>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;