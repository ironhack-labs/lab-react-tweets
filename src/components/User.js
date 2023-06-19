
function User(props) {
    return (
        <span className="user">
        <span className="name">{props.tweetsArray.user.name}</span>
        <span className="handle">{props.tweetsArray.user.handle}</span>
      </span>
    );
}

export default User;