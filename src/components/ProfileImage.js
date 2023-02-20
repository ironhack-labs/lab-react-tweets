import React, { Component } from 'react';


class ProfileImage extends Component {
    render(){
        return(
            <img
            src={this.props.image}
            className="profile"
            alt="profile"
          />
        )
    }
}

export default ProfileImage;