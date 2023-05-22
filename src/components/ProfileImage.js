function ProfileImage(props){
    let {image} = props
    return(
        <div>
         <img src={image} className="profile" alt="profile"/>
        </div>
       
    );

}

export default ProfileImage;

