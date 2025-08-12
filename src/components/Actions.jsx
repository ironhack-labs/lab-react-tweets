import { useState } from "react";

const btnStyle = {
  cursor: "pointer",
};
export default function Actions() {
  const [like, setLike] = useState(false);

  return (
    <div className="actions">
      {/* Font Awesome icons */}
      <i
        className="far fa-comment"
        data-testid="comment-icon"
        style={btnStyle}
      ></i>
      <i
        className="fas fa-retweet"
        data-testid="retweet-icon"
        style={btnStyle}
      ></i>
      <i
        className="far fa-heart"
        data-testid="heart-icon"
        style={{ color: like ? "red" : "", cursor: "pointer" }}
        onClick={() => setLike((like) => !like)}
      ></i>
      <i className="fas fa-share" data-testid="share-icon" style={btnStyle}></i>
    </div>
  );
}
