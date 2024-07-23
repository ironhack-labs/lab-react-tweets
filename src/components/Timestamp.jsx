function Timestamp(tweet) {
    const {timestamp} = tweet
    return (
        <span className="timestamp">{timestamp}</span>
    )
}

export default Timestamp;