import Tweet from "./Tweet";
function MultipleTweets({ listTweets }) {
    return (
        <div className="multipleTweets">
            {listTweets.map((tweet) => {
                return <Tweet tweet={tweet} key={tweet.timestamp} />;
            })}
        </div>
    );
}
export default MultipleTweets;