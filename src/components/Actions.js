function Actions({ comment, retweet, heart, share }) {
  return (
    <div>
      <div className="actions">
        <i class="far fa-comment comment">{comment}</i>
        <i class="fas fa-retweet retweet">{retweet}</i>
        <i class="far fa-heart heart">{heart}</i>
        <i class="fas fa-share">{share}</i>
      </div>
    </div>
  );
}

export default Actions;
