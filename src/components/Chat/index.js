import React, {Component} from 'react';

import PersonCard from '../PersonCard';
import Contacts from '../Contacts';
import Search from '../Search';
import Messages from '../../containers/Messages';
import SetUserSoc from '../../containers/SetUserSoc';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';

class Chat extends Component {
  render() {
    return (
      <div id="frame">
        <div id="sidepanel">
          <PersonCard />
          <Search />
          <Contacts />
          <SetUserSoc />
        </div>
        <div className="content">
          <div className="contact-profile">
            <img src="images/ava-5.png" alt="" />
            <p>Harvey Specter</p>
            <div className="social-media">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <Messages />
        </div>
</div>
    );
  }
}

export default Chat;
