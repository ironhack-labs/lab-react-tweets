export function User({ user_name, user_handle }) {
  return (
    <>
      <span className="user">
        <span className="name">{user_name}</span>
        <span className="handle">@{user_handle}</span>
      </span>
    </>
  );
}