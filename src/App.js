import './App.css'
import Tweet from './components/Tweet'
import { tweetsArray } from './tools/constants'

function App() {
  return (
    <div className="App">
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  )
}

export default App
