// function User(){
    // return(
    //     <span className="user">
    //     <span className="name">{this}</span>
    //     <span className="handle">@{this}</span>
    //   </span>
    // );
// }
// export default User;
import React from 'react';
class User extends React.Component{
    render(){
        return(
            <span className="user">
            <span className="name">{this.props.userData.name}</span>
            <span className="handle">@{this.props.userData.handle}</span>
          </span>
        );
    }
}
export default User;