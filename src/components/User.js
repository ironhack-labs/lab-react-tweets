function User(userData){
console.log(userData)
    return (
        <span className="user">
        <span className="name">{userData.userData.name}</span>
        <span className="handle">{userData.userData.handle}</span>
      </span>
    )
}

export default User