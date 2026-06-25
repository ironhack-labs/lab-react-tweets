export default function User({data:{name, image , handle}}) {
return ( 
<span className="user">
  <span className="name">{name}</span>
  <span className="handle">@{handle}</span>
</span> 
)



}