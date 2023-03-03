function User({usuario}){
    return(
        <span className="user">
            <span className="name">{usuario.name}</span>
            <span className="handle">{usuario.handle}</span>
        </span>
    )
}

export default User;