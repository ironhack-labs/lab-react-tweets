function ProfileImage({ img, userName }) {
  return <img src={img} className="profile" alt={"profile of " + userName} />;
}

export default ProfileImage;
