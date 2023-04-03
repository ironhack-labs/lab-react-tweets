export default function User(props) {
    console.log(props)
    return <span>{props.userData.name} @{props.userData.handle}</span>

}