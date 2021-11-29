const Actions = (props) => {
  const { actions } = props;
  return (
    <div className='actions'>
      <i class='far fa-comment'>{actions}</i>
      <i class='fas fa-retweet'></i>
      <i class='far fa-heart'></i>
      <i class='fas fa-share'></i>
    </div>
  );
};

export default Actions;