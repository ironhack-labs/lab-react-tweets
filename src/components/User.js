function User (props){
    return(
        <span className="user">
             <span className="name"> {props.tweet.user.name} </span>
             <span className="handle">{props.tweet.user.handle}</span>
        </span>
    )
}
export default User