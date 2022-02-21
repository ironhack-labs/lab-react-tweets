function TweetList(props) {
    return (
        <div>
            <h1>List of Tweets</h1>
            <div> {props.children} </div>
        </div>
    );
}

export default TweetList;