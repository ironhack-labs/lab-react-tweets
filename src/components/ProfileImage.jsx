const ProfileImage = ({ image }) => {
  return <img src={image} className="profile" alt="profile" />;
};

export default ProfileImage;

// without destructuring
// const ProfileImage = (props) => {
//   return <img src={props.image} className="profile" alt="profile" />;
// };

// export default ProfileImage;
