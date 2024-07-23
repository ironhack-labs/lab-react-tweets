function User(tweet) {
    const { name, handle } = tweet
    return (
        <>
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </>
    )
}

export default User;