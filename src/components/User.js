import React from "react"; 

function User(props){
    return (
        <div>
            <span className="name">{props.user.name}</span>
            <span className="handle">{props.user.handle}</span>
        </div>
    )
}

export default User;