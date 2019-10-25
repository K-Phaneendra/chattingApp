import React, { Component } from 'react';

class DisplayChat extends Component {
  displayChat = chat =>
    chat.map((obj, i) => (
      <div key={i}>
        <span>
          {obj.user}
:
          {obj.message}
        </span>
      </div>
    ));

  render() {
    return <div>{this.displayChat(this.props.chat)}</div>;
  }
}

export default DisplayChat;
