function User(props) {
    return (

<span className="User">
<span className="name">{props.userData.name}</span>
<span className="handle">{props.userData.handle}</span>
</span>

)
}

export default User;