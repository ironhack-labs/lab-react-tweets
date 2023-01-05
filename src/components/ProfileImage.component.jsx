export default function ProfileImage(props) {
  const { src } = props;
  return <img src={src} className="profile" alt="profile" />;
}
