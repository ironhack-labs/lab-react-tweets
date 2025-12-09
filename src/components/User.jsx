// User component (not used in the final code)
function User({ name, handle }) {
  return (  
  <span className="user">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
  </span>
  );
}
export default User;