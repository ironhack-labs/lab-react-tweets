function User(props){

    return(
            // <span className="name">{userData.name}</span>
            // <span className="handle">@{props.tweet.user.handle}</span>
        <span className="user">
            <span className="name">{props.userData.name}</span>
            <span className="handle">@{props.userData.handle}</span>
        </span>
    );
}

export default User