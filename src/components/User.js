export default function User(props) {
    const { name, image, handle } = props.userData;

    return (
        <>
            <span className="user">
                <span className="name"> {name} </span>
                <span className="handle">{handle}</span>
            </span>
        </>
    );
}

