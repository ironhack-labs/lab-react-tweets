

function ProfileImage(props) {
    return (
        <div>
 <img
        // src="https://i.imgur.com/9yw1Fyw.jpg"
       src={props.image}
        className="profile"
        alt="profile"
      />
        </div>
    )
}

export default ProfileImage