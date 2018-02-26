import React, { Component } from 'react';
import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import FaPaperclip from 'react-icons/lib/fa/paperclip';

class Message extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return(
      <div className="message-input">
        <div className="wrap">
        <input type="text" placeholder="Write your message..." />
        <FaPaperclip className="attachment"/>
        <button className="submit"><FaPaperPlaneO /></button>
        </div>
      </div>
    );
  }
}

export default Message;
