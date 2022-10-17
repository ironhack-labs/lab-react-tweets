function Actions({ data }) {
  return (
    <span className="user">
      <span className="name">{data.name}</span>
      <span className="handle">{data.handle}</span>
    </span>
  );
}

export default Actions;
