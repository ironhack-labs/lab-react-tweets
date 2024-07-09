import ProfileImage from "./ProfileImage";

function User({ image, name, handle }) {
  return (
    <span className="user">
      <ProfileImage image={image} />
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

export default User;
