

function UserComponent(props){
    return(
        <div>
          <span className="user">
            <span className="name">{props.info.name}</span>
            <span className="handle">{props.info.handle}</span>
          </span>

        </div>
    )
}

export default UserComponent