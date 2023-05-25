// function Timestamp(props) {
//     return (
//         <span className='timestamp'>{props.userData.timestamp}</span>
       
//     )
// }

// export default Timestamp


const Timestamp = (props) => {
    console.log('timestamp', props)
    return (
      <span className="timestamp">{props.userData}</span>

    )
  }

  export default Timestamp