
const ProfileImage = (props) => {

    const { tweet } = props

    return  <img src={tweet.user.image} className="profile" alt="profile" />
}

export default ProfileImage