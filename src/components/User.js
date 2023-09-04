function User(props) {
    console.log(props)
    return (
        
        <span className="user">
            <span className="name"> USER_NAME </span>
            <span className="handle">@ USER_HANDLE</span>
        </span>
    )
}

export default User
