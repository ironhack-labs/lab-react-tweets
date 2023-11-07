function ProfileImage(props){
      
    return (
        <img
        src={props.picture}
        className="profile"
        alt="profile"
      />
    )
}


export default ProfileImage