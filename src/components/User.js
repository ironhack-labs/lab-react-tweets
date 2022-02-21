
import React from 'react';


class User extends React.Component {
    render() {
      return(
      <span className="user">
        <span className="name">{this.props.userData.name}</span>
        <span className="handle">{this.props.userData.handle}</span>
      </span>    
      )
    }
}

export default User;