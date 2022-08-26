

const User = (tweet) => {
  return (
    <div>
      <span className="user">
        <span className="name">{tweet.user.name}</span>
        <span className="handle">@{tweet.user.handle}</span>
      </span>
    </div>
  )
}
export default User