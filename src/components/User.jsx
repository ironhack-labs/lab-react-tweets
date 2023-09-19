export const User = (props) => {
    return (
        <div>
            <span className="name">{props.name}</span>
            <span className="handle">@{props.handle}</span>
        </div>
    );
}