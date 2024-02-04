export default function ProfileImage(props) {
  const { image } = props;
  console.log(image);
  return <img src={image} className="profile" alt="profile" />;
}
