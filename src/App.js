import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
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
      <Tweet tweet={ tweetsArray[0] }/>
      <Tweet tweet={ tweetsArray[1] }/>
      <Tweet tweet={ tweetsArray[2] }/>
      
    </div>
  );
}

export default App;








// function App() {

//   const user = {
//     name: 'Rick Sanchez',
//     email: 'rick@c-137.com',
//     picture: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Profile data={user} />
//       </header>
//     </div>
//   )
// }




// function Profile(props) {
// 	console.log(props)
// 	return (
// 		<>
// 			<Details name={props.data.name} email={props.data.email} />
// 			<Picture image={props.data.picture} />
// 		</>
// 	)
// }


// function Details(props) {
// 	const email = props.email
// 	const name = props.name
// 	return (
// 		<>
// 			<h1>Name: {name}</h1>
// 			<h1>Eamil: {email}</h1>
// 		</>
// 	)
// }
