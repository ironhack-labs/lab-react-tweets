class ProfileImage extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image} alt='profile' />
                
            </div>
        )
    }
}

export default ProfileImage;