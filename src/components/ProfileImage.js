function profileImage(props) {
  return (
    <div>
      <img src={props.src} className="profile" alt="profile" />
    </div>
  );
}

export default profileImage;
