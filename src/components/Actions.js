const Actions =()=> {
  const classArr=[
    "far fa-comment",
    "fas fa-retweet",
    "far fa-heart",
    "fas fa-share"
  ]
  return(
    <div className="actions">
      {classArr.map(cls=> <i class={cls}></i> )}
    </div>
  )
}

export default Actions;