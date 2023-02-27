

function ProfileImage(props) {
    console.log(props)
    let {image} = props;

  return (
    <div>  <img src={image}
    className="profile"
    alt="profile"
  /></div>
  )
}

export default ProfileImage