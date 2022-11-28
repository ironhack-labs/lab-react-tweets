function userName(props) {
    const user = props.userData.name;
    const userTag = props.userData.handle
    return (
          <div>
              <span className="user">
                <span className="name">{user}</span>
                <span className="handle">@{userTag}</span>
              </span>
          </div>
       
    )
}

export default userName;