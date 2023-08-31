function TimeStamp (props) {

    const { timestamp } = props;

    return (
        <>
            <span className="timestamp"> { timestamp } </span>
        </>
    )
}

export default TimeStamp;