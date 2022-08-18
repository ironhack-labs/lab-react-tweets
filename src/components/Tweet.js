function Tweet(props) {
  const {tweet} = rops;
  return (
    <div className="tweet">
    <ProfileImage props= {tweet.user.img}/>


      <div className="body">
        <div className="top">
        <User/>
        <Timestamp/>
           
          </div>

     <Message/>
     <Actions/>

    
    </div>
    <i class="fas fa-ellipsis-h"></i>

    </div>
  );
}

export default Tweet;
