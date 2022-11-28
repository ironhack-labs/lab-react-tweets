import '../index.css'

const ProfileImage = props => {
    const { url } = props
    return (
        <img src={url} className="profile" alt="profile" />
    )
}



export default ProfileImage