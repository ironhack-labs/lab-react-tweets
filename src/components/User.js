function User(p){
    return(
        <span className="user">
            <span className="name">{p.userData.name}</span>
            <span className="handle">{p.userData.handle}</span>
        </span>
    );
}

export default User;