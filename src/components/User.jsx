export default function User({ name, handle }) {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}
