import React, {Component} from 'react';
import PersonCard from './../PersonCard';
import Contacts from './../Contacts';
import FaSearch from 'react-icons/lib/fa/search';
import Message from './../Message';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaUserPlus from 'react-icons/lib/fa/user-plus';
import FaCog from 'react-icons/lib/fa/cog';

class Chat extends Component {
  render() {
    return (
      <div id="frame">
        <div id="sidepanel">
          <PersonCard />
          <div id="search">
            <label htmlFor=""><FaSearch /></label>
            <input type="text" placeholder="Search contacts..." />
          </div>
          <Contacts />
          <div id="bottom-bar">
            <button id="addcontact"><FaUserPlus className="fa-fw" /><span>Add contact</span></button>
            <button id="settings"><FaCog className="fa-fw" /><span>Settings</span></button>
          </div>
        </div>
        <div className="content">
          <div className="contact-profile">
            <img src="images/junior-ava.png" alt="" />
            <p>Harvey Specter</p>
            <div className="social-media">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="messages">
            <ul>
              <li className="sent">
                <img src="images/junior-ava.png" alt="" />
                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
              </li>
              <li className="replies">
                <img src="images/junior-ava.png" alt="" />
                <p>When youre backed against the wall, break the god damn thing down.</p>
              </li>
              <li className="replies">
                <img src="images/junior-ava.png" alt="" />
                <p>Excuses don+"'"+t win championships.</p>
              </li>
              <li className="sent">
                <img src="images/junior-ava.png" alt="" />
                <p>Oh yeah, did Michael Jordan tell you that?</p>
              </li>
              <li className="replies">
                <img src="images/junior-ava.png" alt="" />
                <p>No, I told him that.</p>
              </li>
              <li className="replies">
                <img src="images/junior-ava.png" alt="" />
                <p>What are your choices when someone puts a gun to your head?</p>
              </li>
              <li className="sent">
                <img src="images/junior-ava.png" alt="" />
                <p>What are you talking about? You do what they say or they shoot you.</p>
              </li>
              <li className="replies">
                <img src="images/junior-ava.png" alt="" />
                <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
              </li>
            </ul>
          </div>
        <Message />
        </div>
</div>
    );
  }
}

export default Chat;
