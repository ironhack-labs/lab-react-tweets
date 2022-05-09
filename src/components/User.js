function User(prop) {
    return(
        <span className = "user">
            <span className = "name" > {prop.name} </span> 
            <span className = "handle" > @{prop.handle} </span> 
        </span>
    )
}

export default User