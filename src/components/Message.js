function ActionComponent({ message }) {

    console.log("esto es el imagen del twet", message)

    return (
        <p className="message">
            {message}
        </p>
    );
}

export default ActionComponent;