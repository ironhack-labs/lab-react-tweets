function ProfileImage(props){
    return(
        <img
        className="profile"
        alt="profile"
        src= {props.image}
      /> 
    )
}

export default ProfileImage