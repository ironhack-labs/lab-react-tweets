

function User(props) {
    console.log('line 4', props)
    return (
        <span className="user">
        <span className="name"> {props.userData.name} </span>
        <span className="handle">@{props.userData.handle} </span>
        </span>
    )
}

export default User
