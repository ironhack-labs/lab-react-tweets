import '../App.css'
const profileImage = props => {
    console.log(props)
    const {img} = props
     return(  <img
        src={img}
        className="profile"
        alt="profile"
      />
     )
}

export default profileImage 