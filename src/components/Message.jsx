function Message(props) {
    console.log(props)
    return (
        <section className="message">
            <h1>message: {props.message}</h1>
        </section>
    )
}
export default Message