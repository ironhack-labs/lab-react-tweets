function Timestamp(tweet) {
  console.log(tweet);
  const { time } = tweet;
  console.log(time);
  return <div>{time}</div>;
}

export default Timestamp;
