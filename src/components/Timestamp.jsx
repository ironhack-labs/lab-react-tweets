function Timestamp(props){
    const {timeStamp} = props;

    return(
        <div>
            <span className="timestamp">{timeStamp}</span>
        </div>
    );
}

export default Timestamp;