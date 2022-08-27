function Timestamp(props) {
    console.log("<Timestamp /> component props object: ", props);

    return <span className="timestamp">{props.time}</span>;
}

export default Timestamp;