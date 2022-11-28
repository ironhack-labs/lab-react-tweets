function User( { user, userHandle }) {
    return (
        <span className={ user }>
        <span className="name"> { user } </span>
        <span className="handle"> { userHandle }</span>
        </span>
    );
}

export default User;