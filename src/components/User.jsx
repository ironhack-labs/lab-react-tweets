export default function User({ name, handle }) {
  return (
    <div className="top">
      <div className="user">
        <span className="name"> {name} </span>
        <span className="handle"> {handle} </span>
      </div>
    </div>
  );
}
