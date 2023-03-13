function Actions({ actions }) {
  return (
    <div className="actions">
      <i class="far fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="far fa-heart"></i>
      <i class="fas fa-share"></i>
    </div>

  )
};

Actions.defaultProps = {
  actions: ""
};

export default Actions