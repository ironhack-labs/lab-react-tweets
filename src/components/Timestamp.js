import React from "react";

function Time(prop){
    console.log(prop.pic)
    return <span className="timestamp">{prop.timestamp}</span>;
}

export default Time;