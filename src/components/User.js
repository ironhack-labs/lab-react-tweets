function User(props) {
    return (
        <>
        <span className="user">
            <span className="handle">{props.handle}</span>
            <span className="name">{props.name}</span>
        </span>
        </>
    )
}

export default User