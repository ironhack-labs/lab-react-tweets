const User = ( { name, handle } ) => {
    return(
        <div>
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </div>
    )
}

export default User;