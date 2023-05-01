/* eslint-disable react/prop-types */
function ProfilImage( { imageUrl } ) {
	return (
		<img
			src={imageUrl}
			className="profile"
			alt="profile"
		/>
	);
}

export default ProfilImage;
