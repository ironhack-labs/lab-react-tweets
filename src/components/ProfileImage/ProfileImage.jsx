import './ProfileImage.css'

function ProfileImage(props) {
    return (
        <img
            src={props.image}
            className="profile"
            alt="profile"
        />
    )
}

export default ProfileImage