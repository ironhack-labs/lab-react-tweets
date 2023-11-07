function User({ name, handle }) {
    return (
        <span>
            <span className="name">{name}</span>
             <span className="handle">@{handle}</span>
        </span>
    );
}

export default User;