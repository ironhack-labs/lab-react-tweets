function ProfileImage(props) {
  console.log("props from profileimage are", props);

  return <img src={props.image} className="profile" alt="profile" />;
}
export default ProfileImage;
