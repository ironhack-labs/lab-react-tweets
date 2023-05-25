function ProfileImage(props) {
    console.log('adwad',props.image)
    return (
        <img src={props.image} className="profile" alt="profile"/>
    )
}
export default ProfileImage