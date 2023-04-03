export default function User(props) {
  const { userData } = props;
  return (
    <span className="user">
      <span className="name"> {userData.user} </span>
      <span className="handle">@ {userData.handle}</span>
    </span>
  );
}
