import "./time-stamp.css";
function Timestamp(props) {
    return (
        <>
            <span className="timestamp">{props.time}</span>
        </>
    );
}

export default Timestamp;