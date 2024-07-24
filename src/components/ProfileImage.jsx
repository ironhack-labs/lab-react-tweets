function Profileimage (props){
    // the url is props.image
    return(
        <img src={props.image} className="profile" alt="profile" />

    )
}

export default Profileimage;