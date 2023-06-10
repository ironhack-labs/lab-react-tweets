import React from "react";

//facon 2 class pas de parametre de props mais this.props
class ProfileImage extends React.Component {
  render() {
    return <img src={this.props.image} className="profile" alt="profile" />;
  }
}

export default ProfileImage;
