function ProfileImage(props) {
  return (
    <div>
      <img src={props.src} className="profile" alt="profile" />
    </div>
  );
}

export default ProfileImage;
