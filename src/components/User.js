const User = props => {

    const { userData: { name, handle } } = props
    return (
        <span className="user">
            <span className="name"> {name} </span>
            <span className="handle">@{handle} </span>
        </span>
    )
}
export default User