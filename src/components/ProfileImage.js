
function ProfileImage(props) {
    return (
        <img
        src={props.tweetsArray.user.image}
        className="profile"
        alt="profile"
      />
    );
}

export default ProfileImage;