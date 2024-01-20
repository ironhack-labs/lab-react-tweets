import ProfileImage from "../components/ProfileImage"
import Actions from "../components/Actions"
import Message from "../components/Message"
import Timestramps from "../components/Timestramp"
import User from "../components/User"

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
     {/* AQUI SE TIENE UN EJEMPLO DE PASAR DOS VALORES A TRAVES DE UNA MISMA ETIQUETA USER      */}
          <User name={tweet.user.name} handle={tweet.user.handle} />

          <Timestramps timestramps={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
{/* EN EL CASO DEL ACTIONS NO TOCARIA DESTRUCTURARLO EN EL ACTIONS.JSX */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
