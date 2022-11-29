const ProfileImage = ({ image }) => {
    return (
        <div>
            <img src={image} className="profile" alt="profilepic" />
        </div>
    )
}

export default ProfileImage