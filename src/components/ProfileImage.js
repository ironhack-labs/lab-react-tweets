function ProfileImage({image}) {
    console.log('profile image tweet', image);
    return (
      <div className="tweet">
        <img src={image} alt="userImg"/>
 </div>
    )};  
    export default ProfileImage;