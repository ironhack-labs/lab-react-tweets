import React, { Component } from "react";

class User extends Component {
  render() {
    console.log(this.props)
    return (
      <span className="user">
        <span className="name"> {this.props.userData.name} </span>
        <span className="handle">@{this.props.userData.handle}</span>
      </span>
    );
  }
}

export default User;