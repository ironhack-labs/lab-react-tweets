function ProfileImage(props) {
    console.log("<ProfileImage /> component props object: ", props);

    return (
        <img
            src={props.image}
            className="profile"
            alt="profile"
      />
    );
}

export default ProfileImage;