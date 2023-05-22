import './profileImage.css'

const ProfileImage = ({ image }) => {
    return (
        <>
            <img src={image} alt="image" className="profile" />
        </>
    )
}
export default ProfileImage