const ProfileImage = ({ image }) => {
      console.log({image})
      return (
            <div>
                  {/* <div className="tweet"> */}
                  <img src={ image} className="profile" alt="profile"/>
                  </div>
            /* </div> */
      )
}

export default ProfileImage
