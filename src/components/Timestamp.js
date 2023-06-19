function TimeStamp(props) {
    console.log(props.time);
    return(
        <span className="timestamp">{props.time}</span>
    )
}

export default TimeStamp;