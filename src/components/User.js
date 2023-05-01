function User(props){
  return(
    <span className="user">
      <span className="name"> {props.USER_NAME} </span>
      <span className="handle"> {props.USER_HANDLE}</span>
    </span>
  )
}
export default User