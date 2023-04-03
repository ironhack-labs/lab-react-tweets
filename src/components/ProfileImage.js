function ProfileImage(props){

    console.log("props 2.....", props)
    return (
        <img
        src={props.image}
        className="profile"
        alt="profile"
      />

    )
}

export default ProfileImage