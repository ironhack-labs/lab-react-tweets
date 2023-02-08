function ProfileImage(props){
    return(
    <div>
        <img src={props.image} alt="profile-photo" className="profile"/>
    </div>
    )
}

export default ProfileImage;