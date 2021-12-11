

const User = ({user}) => {

    
   

    return (
        <div>
            <span className="user">
                <span className="name"> {user.name} </span>
                <span className="handle"> {user.handle}</span>
          </span>
        </div>
    )
}

export default User
