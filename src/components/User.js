function User(props) {
   const { userData } = props;
   return (
     <div>
       <span class="name">{userData.name}</span>
       <span class="handle">{userData.handle}</span>
     </div>
   );
}

export default User;
