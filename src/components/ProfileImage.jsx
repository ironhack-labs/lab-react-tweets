
function ProfileImage(props) {

    
    console.log(props) 
    return(
        
        <img
        src={props.image} // We have created on Tweet.jsx on <ProfileImage image={props.banana.user.image} 
        // a props {image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png"}.
        // So we are accesing that with props.image!!!
        className="profile"
        alt="profile"
      />
    )

}

export default ProfileImage