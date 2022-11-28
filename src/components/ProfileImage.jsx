import React from 'react'; 

export default function Profile (props) {
    return (
    <div className ="profile">
    <img src={props.image} className="profile" alt="profile"/>
    </div>
    )
}