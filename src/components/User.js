function Person({ name }) {
    // console.log('esteeeeeeeeeeee es el name', name)

    return (
        <span className="user">
            <span className="name">{name}</span>
            {/* <span className="handle">{handle}</span> */}
        </span>
    )
}

export default Person;