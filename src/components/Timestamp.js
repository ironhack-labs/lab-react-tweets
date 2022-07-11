const Timestamp = ({ tweet }) => {

    const { timestamp } = tweet

    return (
        <div className="body">
            <div className="top">
                <span className="timestamp">{timestamp}</span>
            </div>
        </div>
    )
}

export default Timestamp