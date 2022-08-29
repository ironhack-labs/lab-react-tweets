
import './User.css'

function User({userData}) {
  const {name, handled} = userData

  return (
    <span className="user">
    <span className="name">{name}</span>
    <span className="handle">{handled}</span>
  </span>
  );
}


export default User;

