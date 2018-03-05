import React, { Component } from 'react';
import { connect } from 'react-redux';

import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import FaPaperclip from 'react-icons/lib/fa/paperclip';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  newMassage = (e) => {
    this.setState( {
      message: e.target.value
    } );
  }

  submitMessage = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.message)
    this.setState({
      message: ''
    });
  }

  render() {
    return(
      <form
        className="message-input"
        onSubmit={this.submitMessage}
        >
        <div className="wrap">
          <input
            type="text"
            placeholder="Write your message..."
            onChange={ this.newMassage }
            value={ this.state.message }
            />
          <FaPaperclip className="attachment"/>
          <button
            className="submit"
          >
            <FaPaperPlaneO />
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: (payload) => dispatch({
    type: 'ADD_NEW_MESSAGE',
    payload: payload
  })
});

export default connect(null, mapDispatchToProps)(Message);
