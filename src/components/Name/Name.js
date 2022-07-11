import userEvent from "@testing-library/user-event"
import Tweet from "../Tweet"

const Name = ({ name }) => {
    return (
        <>
            <span className="name">{name}</span>
        </>
    )
}

export default Name