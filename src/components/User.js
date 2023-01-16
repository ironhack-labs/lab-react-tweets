function User(props) {

    return  <>
                <span><b>{props.userData.name}</b> </span>
                
                <span>{props.userData.handle} </span>
            </>
}

export default User;