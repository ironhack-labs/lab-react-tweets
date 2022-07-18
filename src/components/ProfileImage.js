function ProfileImage(props){
    return (
        <img
            src={props.image}
            className="profile"
            alt="profile"
        />
  );
};
export default ProfileImage;

// import React from "react";

// class ProfileImage extends React.Component{
//     render(){
//         return (
//             <img
//                 src={this.props.image}
//                 className="profile"
//                 alt="profile"
//             />
//         );
//     }
// };
// export default ProfileImage;