import Tweet from "./Tweet";

export default function Image ({data}) {
const { name,image, handle} = data

return (

<img src={image} className="profile" alt="profile"/> 

)

}