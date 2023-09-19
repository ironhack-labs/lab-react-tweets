// export const ProfileImage = ({src, alt}) => {
//     return <img src={src} className="profile" alt={alt} />;
//   };
  

export const ProfileImage = (props) => {
  return <img src={props.src} className="profile" alt={props.alt} />;
};
