function User({userName,UserHandle}){
    return(
        <span className="user">
        <span className="name">{userName}</span>
        <span className="handle">{UserHandle}</span>
      </span>
    );
}
export default User;