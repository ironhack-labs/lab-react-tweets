import React
 from "react";
function UserComponent({user}){
    const {name,handle} =user;
    return(
        <span className="user">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
        </span>
    )

}

export  default UserComponent;