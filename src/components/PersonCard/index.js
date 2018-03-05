import React, { Component } from 'react';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';

class PersonCard extends Component {
  constructor() {
    super();
    this.state = {
        userFacebook: '',
        userTwitter: '',
        userInstagram: '',
        userIsActive: ''
    }
  }

  handleClick = () => {
    const profile = document.getElementById('profile');
    profile.classList.toggle('expanded');
  }

  setSocial = (e) => {
    e.preventDefault();
    this.setState ({
    userFacebook : e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <div id="profile">
        <div className="wrap">
          <img id="profile-img" src="images/ava-4.png" className="online" alt="" />
          <p>Mike Ross</p>

          <i className="expand-button" onClick={() => this.handleClick()}>
            <FaCaretDown
              size="22"
            />
          </i>
          <div id="status-options">
            <ul>
              <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
              <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
              <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
              <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
            </ul>
          </div>
          <div id="expanded">
            <label htmlFor="facebook"><FaFacebook /></label>
            <input
              name="facebook"
              type="text"
              value={this.state.userFacebook}
              onChange={this.setSocial}
            />
            <label htmlFor="twitter"><FaTwitter /></label>
            <input name="twitter" type="text" value={this.state.userTwitter} />
            <label htmlFor="instagram"><FaInstagram /></label>
            <input name="instagram" type="text" value={this.state.userInstagram} />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
