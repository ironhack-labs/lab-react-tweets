
function ProfileImage (props) {

  const { image } = props
    
  return (
    <div className="tweet">
      <img src={image} className="profile" alt="profile"/>
    </div>
  )

}

export default ProfileImage