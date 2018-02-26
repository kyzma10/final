import React, { Component } from 'react';

class Contact extends Component {
  handleClick = () => {
    const contact = document.getElementById('contacts');
    contact.classList.toggle('expanded');
  }

  render() {
    return (
      <li className="contact" onClick={() => this.handleClick()}>
        <div className="wrap">
          <span className="contact-status online"></span>
          <img src="images/men-ava.jpg" alt="" />
          <div className="meta">
            <p className="name">Louis Litt</p>
            <p className="preview">You just got LITT up, Mike.</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Contact;
