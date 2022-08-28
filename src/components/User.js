const User = (tweets) => {
    return (
      <div>
        <span className="user">{tweets.user}
          <span className="name">{tweets.name}</span>
          <span className="handle">@{tweets.handle}</span>
        </span>
      </div>
    )
  }
  export default User 