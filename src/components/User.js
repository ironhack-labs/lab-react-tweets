import React from "react";

function User(prop){
    console.log(prop.pic)
    return (
        <div>
         <span className="name">{prop.user.name}</span>
         <span className="handle">{prop.user.handle}</span>
        </div>
    )
}

export default User;