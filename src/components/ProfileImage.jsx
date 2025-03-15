
export default function ProfileImage({ image }) {
  return (
    <img
      src={image}      // "image" prop for the URL
      className="profile"
      alt="profile"
    />
  );
}
