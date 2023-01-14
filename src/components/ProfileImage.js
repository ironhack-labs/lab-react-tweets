function ProfileImage(props) {
  return (
    <div className="tweet">
      <img className="profile" src={props.image} />
    </div>
  );
}

export default ProfileImage;
