function User({ userData, handle }) {
  return (
    <>
      <span className="name">{userData}</span>
      <span className="handle">{handle}</span>
    </>
  );
}

export default User;
