import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
  static propTypes = {
    admins: PropTypes.array.isRequired,
    fetchAdmins: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    this.props.fetchAdmins();
  };

  renderAdmins = () =>
    this.props.admins.map(admin => (
      <li key={admin.id} className="collection-item">
        {admin.name}
      </li>
    ));

  render() {
    return (
      <div>
        <h5>Protected list of admins:</h5>
        {this.props.admins.length < 1 ? (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        ) : (
          <ul className="collection">{this.renderAdmins()}</ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({
  admins,
});

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins },
  )(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
