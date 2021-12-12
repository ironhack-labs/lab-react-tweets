const User = (props) => {
    const {usersArray} = props
    return (
      <span className="user">
        <span className="name">{usersArray.name}</span>
        <span className="handle">@{usersArray.handle} </span>
      </span>
    );
  };

  export default User;