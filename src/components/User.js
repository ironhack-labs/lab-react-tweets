function User(probs) {
    return (
        <span className="user">
        <span className="name">{probs.userData.name}</span>
        <span className="handle">{probs.userData.handle}</span>
      </span>
  );
}

export default User;