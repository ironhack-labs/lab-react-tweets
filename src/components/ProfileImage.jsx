function Profileimage(props) {
    console.log(props) // { image: }


    return (
        <div>
            <img src={props.image} className="profile" alt="profile" />

        </div>

    )
}

export default Profileimage
