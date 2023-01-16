export default function ProfileImage(props){
    const {url}=props
    return(
        <img src={url} className="profile" alt="profile"/>
    )
}