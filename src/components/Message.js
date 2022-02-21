import React from 'react';


class Message extends React.Component {
    render() {
      return(
        <p className="message">{this.props.message}</p>
      )
    }
}

export default Message;

