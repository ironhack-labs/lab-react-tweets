function User (props){
    return (
        <div className="user">
            <div className="name">{props.userData.name}</div>
            <div className="handle">{props.userData.handle}</div>
        </div>
    )
}

export default User;