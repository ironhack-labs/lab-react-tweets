const ProfileImage = (props) => {

    //console.log(props)

    return (
        <div>
            <img src={props.image} className="profile" alt="profile"/>
        </div>
    )
}

export default ProfileImage
