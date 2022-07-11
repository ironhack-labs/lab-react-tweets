import React from 'react'

export default function User(props) {

    console.log(props)
    return(
        <span className="user">
        <span className="name">{props.tweetUser.name}</span>
        <span className="handle">{props.tweetUser.handle}</span>
       </span>
    )
}
