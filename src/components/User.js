function User(props){
    return(
        <span className="user">
  <span className="name">{props.uData.name}</span>
  <span className="handle">@{props.uData.handle}</span>
</span>

    )
}

export default User