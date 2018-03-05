import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './Message';

class Messages extends Component {

  render() {

    return(
      <div className="messages">
        <ul>
          <li className="replies">
            <img src="images/junior-ava.png" alt="" />
            <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
          </li>
          {
            this.props.messages.messages.map(m => {
            return <li key={m.id} className={m.imgClass}>
              <img src={m.img} alt="" />
              <p>{m.message}</p>
            </li>
          }) }
        </ul>

        <Message />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Messages);
