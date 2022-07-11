const User = ({ tweet }) => {

    const { user: { name, handle } } = tweet

    return (
        <div className="body">
            <div className="top">
                <span className="user">
                    <span className="name">{name}</span>
                    <span className="handle">{handle}</span>
                </span>
            </div>
        </div>
    )
}

export default User