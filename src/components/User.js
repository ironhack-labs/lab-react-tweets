import userData from "./Tweet";

function User(props) {
  return (
    <span className="user">
      <span className="name">{props.userData}</span>
      <span className="handle">{props.handle}</span>
    </span>
  );
}

export default User;
