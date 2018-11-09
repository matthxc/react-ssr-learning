import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  const RequireAuth = props => {
    const { auth } = props;
    switch (auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        );
      default:
        return <ChildComponent {...props} />;
    }
  };

  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  RequireAuth.propTypes = {
    auth: PropTypes.any.isRequired,
  };

  return connect(mapStateToProps)(RequireAuth);
};
