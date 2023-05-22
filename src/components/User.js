function User(props){
    return( 
    <div>
        <span class="name">{props.user.name}</span>
        <span class="handle">@{props.user.handle}</span>
    </div>
    )
}

export default User;