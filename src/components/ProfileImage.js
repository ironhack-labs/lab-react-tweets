function Photo(props) {
    return (
        <div className="Photo">
            <img
                url={props.url}
                className="Photo"
                alt="dogSmiling"
            />
        </div>
    )
}
export default Photo;