function User({userData}) {
    return (
        <div>
            <span className="user">
                <span className="name">{props.userData.name}</span>
                <span className="handle">{props.userData.handle}</span>
            </span>
        </div>
    );
}

export default User;