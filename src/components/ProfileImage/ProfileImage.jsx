
const ProfileImage = ({ userImg: { name, image, handle } }) => {

    return (

        < img
            src={image}
            className="profile"
            alt="profile"
        />

    )


}


export default ProfileImage