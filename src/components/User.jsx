
export const User = (props) => {
    console.log("Que es props", props)
    return(
        <div className="top">
          <span className="user">
            <span className="name">{props.usr.name}</span>
            <span className="handle">@{props.usr.handle}</span>
          </span>

          <span className="timestamp">{props.time}</span>
        </div>
    )
}