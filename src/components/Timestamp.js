function Timestamp(props) {
    const timeStamp = props.time;
    return (
        <span className="timestamp">{timeStamp}</span>
    )
}

export default Timestamp;