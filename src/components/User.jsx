function User(props){
    const {userName, userHandle} = props;
    
    return(
        <div>
            <span className="user">
                <span className="name">{userName}</span>
                <span className="handle">{userHandle}</span>
            </span>
        </div>
    );
}

export default User;