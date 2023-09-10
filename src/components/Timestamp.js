function Timestamp(props){

    console.log("=========Profile Image==============")
    console.log(props)
    console.log("=========Profile Image==============")
    return (
        <span className="timestamp"> {props.time} </span>
    )
}

export default Timestamp