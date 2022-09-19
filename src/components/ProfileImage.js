function ImageComponent({ image }) {

    console.log("esto es el imagen del twet", image)



    return (
        <img
            src={image}
            className="profile"
            alt="profile"
        />
    );
}

export default ImageComponent;