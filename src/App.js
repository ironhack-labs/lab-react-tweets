import './App.css';
import Actions from './components/Actions';
import Message from './components/Message';
import ProfileImage from './components/ProfileImage';
import Timestamp from './components/Timestamp';
import User from './components/User';

const tweetsArray = [
  {
    user: {
      name: 'Thoughts of Dog®',
      image: 'https://i.imgur.com/b0EdHVV.jpg',
      handle: 'dog_feelings',
    },
    timestamp: '1h ago',
    message: 'the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company',
  },
  {
    user: {
      name: 'Thoughts of Dog®',
      image: 'https://i.imgur.com/b0EdHVV.jpg',
      handle: 'dog_feelings',
    },
    timestamp: '2h ago',
    message:
      'sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out',
  },
  {
    user: {
      name: 'Thoughts of Dog®',
      image: 'https://i.imgur.com/b0EdHVV.jpg',
      handle: 'dog_feelings',
    },
    timestamp: '3h ago',
    message:
      'here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat',
  },
];

function App() {
  return (
    <div className="App">
      {tweetsArray.map(function (tweet) {
        return (
          <div key={tweet.id}>
            <div className="tweet">
              <ProfileImage image={tweet.user.image} />

              <div className="body">
                <div className="top">
                  <User userData={tweet.user} />
                  <Timestamp time={tweet.timestamp} />
                </div>

                <Message message={tweet.message} />

                <div className="actions">
                  <Actions />
                </div>
              </div>

              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
