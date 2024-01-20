//  IMPORTANTE, HACER EL DESTRUCTURIN SI ES NECESARIO CON {}, SE PUEDE HACER DE DOS VALORES

function User({ name, handle }) {
    return (

        <span className="user">
            <span className="name">{name}</span>
            <span className="handle">@{handle} </span>
          </span>
    )
}

export default User