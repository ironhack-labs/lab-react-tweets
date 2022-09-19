function UserComponent({ timestamp }) {

    console.log("esto es el imagen del twet", timestamp)

    return (
        <span className="timestamp">{timestamp}</span>
    );
}

export default UserComponent;