import React from "react";

class ProfileImage extends React.Component {
  render() {
    return <img src={this.props.image} className="profile" alt="profile" />;
  }
}

export default ProfileImage;
