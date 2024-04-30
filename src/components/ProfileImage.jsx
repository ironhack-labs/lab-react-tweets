function ProfileImage(props) {
    return <span className="handle">
        <img src={props.image} className="profile" alt="profile" />
        </span>
}
export default ProfileImage;