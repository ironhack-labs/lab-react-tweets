function User(props) {
    const { userData } = props;
    const { name, handle } = userData;

    return(
        <div>
          <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
          </span>            
        </div>
    );
}

export default User;