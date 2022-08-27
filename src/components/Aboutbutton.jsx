import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export const Aboutbutton = () => {
    const ellipsis = <FontAwesomeIcon icon={faEllipsis} />
    return(
        <span> {ellipsis} </span>
    )
}