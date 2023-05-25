function ProfileImage(props) {
    return (
        <img
        src={props.image} 
        className="profile"
        alt="profile"
      />);
}
export default ProfileImage;

/*Con el props.image el valor que se le da a después del props es la manera que tienes de poder
llamarlo en el tweet una vez se ha importado el componente. */