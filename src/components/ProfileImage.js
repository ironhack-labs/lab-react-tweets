import "./../App.js"

const ProfileImage = ({ user }) => {

    console.log(user.image)
    return (
        <img
            src={user.image}
            className="profile"
            alt="profile"
        />
    )
}

export default ProfileImage





