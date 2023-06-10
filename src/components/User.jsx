import React from "react";

class User extends React.Component {
  render() {
    return <span className="user">
                <span className="name"> {this.props.name} </span>
                <span className="handle">@{this.props.handle}</span>
            </span>;
  }
}

export default User;
