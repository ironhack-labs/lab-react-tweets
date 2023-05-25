//import Tweet from "./Tweet";
function User(props) {
    console.log(props)
    return (
        <span className="user">
        <span className="name">{props.userData.name}</span> 
        <span className="handle">{props.userData.handle}</span>
        {/* He encontrado la solución investigando por internet
        pero no logro entenderla. */}
      </span>
    )
}
export default User