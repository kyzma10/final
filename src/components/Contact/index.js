import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandom } from '../../reducers/messageReducer';

class Contact extends Component {
  handleClick = () => {
    const contact = document.getElementById('contacts');
    contact.classList.toggle('expanded');
  }

  toCapitalize = word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

  render() {
    const piple = this.props.users.users;

    return (
      <div>
        {
          (piple.results) ? piple.results.map(u => (
            <li key={u.login.md5} className="contact" onClick={() => this.handleClick()}>
                <div  className="wrap">
                  <span className={getRandom(1,3) === 1 ? 'contact-status online' :
                  getRandom(1, 3) === 2 ? 'contact-status away' : 'contact-status busy'}></span>
                  <img src={u.picture.medium} alt="" />
                  <div className="meta">
                    <p className="name">{this.toCapitalize(u.name.first)} {this.toCapitalize(u.name.last)}</p>
                    <p className="preview">{u.email}</p>
                  </div>
                </div>
                </li>
            )) : <li>No contacts</li>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Contact);
