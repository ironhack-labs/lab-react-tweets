import Tweet from "../Tweet"

const Image = ({ profileImg }) => {
    return (
        <>
            <img
                src={profileImg}
                className="profile"
                alt="profile"
            />
        </>
    )
}

export default Image