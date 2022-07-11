import userEvent from "@testing-library/user-event";
import ProfileImage from './components/ProfileImage'
import User from './components/User'
import Actions from './components/Actions'
import Message from './components/Message'
import Timestamp from './components/Timestamp'





function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">






      {/* <div className="body">
        <div className="top">
          

        </div>

        

        
      </div> */}

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
