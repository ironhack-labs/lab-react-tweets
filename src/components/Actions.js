function Actions(props) {

    const {actions} = props

    return (
        <div className="actions" >
        {actions}
        <i className="far fa-comment"></i>
        <i className="fas fa-retweet"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-share"></i>
      </div>

    )
}

export default Actions;