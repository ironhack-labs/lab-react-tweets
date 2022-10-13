function User(prop){
	return(
			<span className="user">
					<span className="name">{prop.userData.name}</span>
					<span className="handle">{prop.userData.handle}</span>
			</span>
	)
}

export default User