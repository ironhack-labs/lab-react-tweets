import "./App.css";
import Tweet from "./components/Tweet";
import ProfileImage from "./components/ProfileImage";

const tweetsArray = [
    {
        user: {
            name: "Thoughts of Dog®",
            image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
            handle: "dog_feelings",
        },
        timestamp: "1h ago",
        message:
            "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
    },
    {
        user: {
            name: "Thoughts of Dog®",
            image: "https://media.istockphoto.com/id/479667835/photo/background-elephant.jpg?s=612x612&w=0&k=20&c=DwfinIerTq104FXWcBBwegTWcmw8tf18EGqa5IpEyFk=",
            handle: "dog_feelings",
        },
        timestamp: "2h ago",
        message:
            "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
    },
    {
        user: {
            name: "Thoughts of Dog®",
            image: "https://i.imgur.com/b0EdHVV.jpg",
            handle: "dog_feelings",
        },
        timestamp: "3h ago",
        message:
            "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
    },
];

function App() {
    return (
        <div className="App">

            <Tweet tweet={tweetsArray[0]} />
            <Tweet tweet={tweetsArray[1]} />
            <Tweet tweet={tweetsArray[2]} />
        </div>
    );
}

export default App;
