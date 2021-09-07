
const ProfileImage = (props) => {
  return (
    <div>
       <img
        src={props.image}//takes property image to pass to tweet in which you pass an object
        className="profile"
        alt="profile"
      />
    </div>
  )
}

export default ProfileImage
