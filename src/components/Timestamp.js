const TimeStamp = ({ date }) => {
    const { timestamp } = date

    return (
        <>
            <span className="timestamp">{timestamp}</span>
        </>
    );
};

export default TimeStamp;