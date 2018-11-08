import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    this.props.fetchUsers();
  };

  renderUsers = () =>
    this.props.users.map(user => (
      <li key={user.id} className="collection-item">
        {user.name}
      </li>
    ));

  render() {
    return (
      <div>
        <h5>Heres a big list of users:</h5>
        {this.props.users.length < 1 ? (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        ) : (
          <ul className="collection">{this.renderUsers()}</ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers },
  )(UsersList),
};
