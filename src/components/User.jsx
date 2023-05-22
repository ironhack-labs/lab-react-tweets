const UserInfo = ({ UserData }) => {

    const { name, handle } = UserData

    return (
        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

export default UserInfo