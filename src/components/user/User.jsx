import React from "react";
import "./user.css"

function User(props){
    const {name, handle} = props
    return(
        <span className="user">
           <h4 className="name">{name}</h4>
           <p className="handle mt-1">@{handle}</p>
         </span>
    )

}
export default User