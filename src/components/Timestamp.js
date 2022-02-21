import React from 'react';


class Timestamp extends React.Component {
  render() {
    return (
    <span className="timestamp">{this.props.time}</span>
    )
  }
}

export default Timestamp;