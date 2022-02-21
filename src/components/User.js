
   const User = prop =>{

    const{name,handle}= prop.userData
        return (
            <span className="user">
            <span className="name"> {name}E </span>
            <span className="handle">{handle}</span>
        </span>
        )
    }

export default User;
