
const TweetUser = (tweet) =>{

    return (
        <span className="user">
            <span className="name"> {tweet.name}</span>
            <span className="handle">{tweet.handle}</span>
        </span>
    )
}

export default TweetUser
