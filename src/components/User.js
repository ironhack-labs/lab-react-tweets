class User extends Component {
    render(){
        return(
            <div>
                 <div className="user">
                    {props.user.name}
                 </div>
                
            </div>
        )
    }
}

export default User;