const ProfileImage = ({ image }) => {
    return (
        <figure>
            <img src={image} className="profile" alt="profile" />
        </figure>
    )
}

export default ProfileImage