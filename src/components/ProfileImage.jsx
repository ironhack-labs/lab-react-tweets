export default function ProfileImage(props) {
  return (
    <div>
      <img src={props.image} className="profile" alt="profile" />
    </div>
  );
}
