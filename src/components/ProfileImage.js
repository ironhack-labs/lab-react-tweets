// export function ProfileImage(props) {
//     return (
//         <img src="{props.tweet.image}" className="profile" alt="profile"/>
//     )
// }

export const ProfileImage = ({image}) => {
    return (
        <img src={image} className="profile" alt="profile"/>
        /* in a react component, the part between {} is treated as a JS expression, 
        which here is a String, and will be rendered as a quoted string in the resulting HTML, 
        a pair of quotes is added automatically 
        if it was not the case, one could add them with this syntax: 
        <img src={`"${image}"`} className="profile" alt="profile"/>
        results in a double pair in this case!
        */
    )
}