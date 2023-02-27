import './ProfileImage.css'

const ProfileImage = ({ user }) => {
    return (
        <img
            src={user.image}
            alt={user.name}
            className="profile"
        />
    )
}

export default ProfileImage