function ProfileImage(prop) {

    // console.log(prop.image);
    return(
        <img
        src= {prop.image}
        className="profile"
        alt="profile"
      />
    )
}

export default ProfileImage;