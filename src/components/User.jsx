export default function User(props) {
  return (
    <span className="user">
      <span className="name">{props.name}</span>
      <span className="handle">@{props.handle}</span>
    </span>
  );
}
