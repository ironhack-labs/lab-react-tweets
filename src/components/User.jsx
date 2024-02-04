export default function Use(props) {
  console.log(props);
  const { name, handle } = props;
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{"@" + handle}</span>
    </span>
  );
}
