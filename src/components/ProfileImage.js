const ProfileImage = ({ tweet }) => {
    
    const { user: { image } } = tweet
    
    return (
        <div>
            <img
                src={image}
                className="profile"
                alt="profile">
            </img>
        </div>
    )
}

export default ProfileImage