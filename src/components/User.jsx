function User({username, handle}){
  return (
    <>
   <span className="user">
      <span className="username">@{username}</span>
      <span className="handle">{handle}</span>
    </span>

  </>
  )
  
}

export default User;
