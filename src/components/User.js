function User(props) {
    return (
        <span className="user">
            <span className="name">{props.details.name}</span>
            <span className="handle">{props.details.handle}</span>
        </span>
    )
}

export default User;