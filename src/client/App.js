import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => (
  <div>
    <Header />
    <div className="container">{renderRoutes(route.routes)}</div>
  </div>
);

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
