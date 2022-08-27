import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

export const Actionsbutton = () => {
    const comment = <FontAwesomeIcon icon={faComment} />
    const retweet = <FontAwesomeIcon icon={faRetweet} />
    const heart = <FontAwesomeIcon icon={faHeart} />
    const share = <FontAwesomeIcon icon={faShare} />
    return(
        <>
            <span>{comment}</span>
            <span>{retweet}</span>
            <span>{heart}</span>
            <span>{share}</span>
        </>
    )
}