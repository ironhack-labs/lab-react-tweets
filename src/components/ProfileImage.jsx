
const ProfileImage = (props) => {
    console.log(props);

    return (
        <>
            <img src={props.img} className="profile" alt="a cute doggie with sandia" />
        </>
    )

}

export default ProfileImage;