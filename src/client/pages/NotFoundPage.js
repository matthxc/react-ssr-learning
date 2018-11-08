import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="row center-align" style={{ marginTop: '200px' }}>
      <div className="col s12">
        <div className="card-panel red lighten-2">
          <h1 className="white-text">
            404
            <br />
            Page not found
          </h1>
        </div>
      </div>
    </div>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object.isRequired,
};

export default {
  component: NotFoundPage,
};
