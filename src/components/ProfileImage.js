
function ProfileImage(p){
    console.log(p);
return (
    <img
        src={p.image}
        className="profile"
        alt="profile"
    />
      );
}

export default ProfileImage