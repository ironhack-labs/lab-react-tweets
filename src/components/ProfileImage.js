function ProfileImage(props) {
    console.log(props);
    return(
      <img className="profile"
      alt="profile" src={props.image}/>
    )
  }
  
  export default ProfileImage;