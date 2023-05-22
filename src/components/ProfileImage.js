function ProfileImage (props){
    let {image} = props

    return(
        <img className="profile"
        alt="profile"
        src={image}/>
    )
}

export default ProfileImage;