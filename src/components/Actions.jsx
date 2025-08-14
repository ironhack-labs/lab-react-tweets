import {useState} from 'react';

function Actions() {
  const [liked, setLiked] = useState(true);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="actions">
      <i class="far fa-comment" data-testid="comment-icon"></i>
      <i class="fas fa-retweet" data-testid="retweet-icon"></i>

      <i
        className={liked ? 'far fa-heart' : 'fas fa-heart'}
        style={{color: liked ? 'grey' : 'red', cursor: 'pointer'}}
        onClick={toggleLike}
        data-testid="heart-icon"
      ></i>

      <i class="fas fa-share" data-testid="share-icon"></i>
    </div>
  );
}

export default Actions;
