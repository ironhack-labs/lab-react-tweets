import '../App.css'
const Message = props => {
    console.log(props)
    const {msg} = props
     return(   <p className="message">{msg}
         
        </p>
     )
}

export default Message