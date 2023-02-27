const user = ({ infoUser }) => {
    const { name, handle } = infoUser
    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

export default user




