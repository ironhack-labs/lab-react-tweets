function UserComponent({ user }) {

    console.log("esto es el imagen del twet", user)

    return (
        <span className="user">
            <span className="name">{user.name}</span>
            <span className="handle">{user.handle}</span>
        </span>
    );
}

export default UserComponent;