import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <p className="message">{this.props.message}</p> 
    )
  }
}

export default Message;
