function User (props) {
    return (
        <>
            <span className="name">{props.data.name}</span>
            <span className="handle">{props.data.handle}</span>
        </>
    )
}

export default User;