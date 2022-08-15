import React from "react";

function User(props) {
	const user = props;
	//console.log(user);
	console.log(props);

	return (
		<span className="user">
			<span className="name">{user.userData}</span>
			<span className="handle">{user.handle}</span>
		</span>
	);
}

export default User;
