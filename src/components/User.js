function User(props){
    return (
        <div>
        <span className="name">{props.userData.name}</span>
        <span className="handle">@{props.userData.handle}</span>
        </div>
    )
}

export default User;