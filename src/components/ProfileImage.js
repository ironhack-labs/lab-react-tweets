function ProfileImage(props) {
    return <img src={props.user.image} className="profile" alt="profile" />;
}

export default ProfileImage;