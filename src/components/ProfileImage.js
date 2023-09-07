function ProfileImage(props) {
    //const {image} = props.tweet.user.image;
    //const {image} = props.image
    const photo = props.image
    return (
        <div>
            <img src={photo} className="profile" alt="user image"/>
        </div>

    )
}

export default ProfileImage;