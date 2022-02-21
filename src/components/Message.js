const TweetMessage = (props) =>{
let {message} = props

    return (
<p className="message">
          {message}
        </p>
    )
}

export default TweetMessage