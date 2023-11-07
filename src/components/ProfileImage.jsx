function ProfileImage(){

}
// import React from "react";
function ProfileImage({img}){
    return(
        <img src={img} className="profile" alt="profile" />
    )
}
export default ProfileImage;