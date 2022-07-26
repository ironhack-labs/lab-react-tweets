function ProfileImage(props) {
    //console.log(props.data)
    return (
        <img
            src={props.data}
            className="profile"
            alt="profile"
        />
    )
}

export default ProfileImage;