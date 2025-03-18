export function User({user}) {
    const {name, handle} = user
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}
