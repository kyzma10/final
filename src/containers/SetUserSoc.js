import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { addUser } from '../actions';

import axios from 'axios';

import FaUserPlus from 'react-icons/lib/fa/user-plus';
import FaCog from 'react-icons/lib/fa/cog';

class SetUserSoc extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} }
  }
  addSettings = () => {
    console.log('<---setup--->');
  }

  queryUsers = () => {
    const url = "https://randomuser.me/api/?results=10";
    // const request = axios.get(url);
    // this.props.addUsers(request);
    // console.log(request);
    fetch(url)
    .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
    .then(data => this.props.addUser(data))
    // .then(data => this.props.addUser(data))
    .catch(error => console.log(error));
    // this.props.addUser(this.state.data);
  }

  render() {
    // console.log(this.state.data);
    // if (this.state.data.results)
    //   this.state.data.results.map(u => (console.log(u)));
    return(
      <div id="bottom-bar">
        <button
          id="addcontact"
          onClick={this.queryUsers}>
          <FaUserPlus className="fa-fw" />
          <span>Add contact</span>
        </button>
        <button
          id="settings"
          onClick={this.addSettings}>
          <FaCog className="fa-fw" />
          <span>Settings</span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: (payload) => dispatch({
    type: 'ADD_USERS',
    payload
  })
});

export default connect(null, mapDispatchToProps)(SetUserSoc);
