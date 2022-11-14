import React from "react";

function User (props){
    const {userData} = props
    return (
        <div>
            <span className="user">{userData.name}</span>
            <span className="user">{userData.handle}</span>
        </div>
    )
}


 export default User 