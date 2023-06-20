function Messages(props) {
	console.log(props);
	return (
		<>
			<p className="message">{props.message}</p>
		</>
	);
}

export default Messages;
