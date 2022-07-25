import './App.css'
import Tweet from './components/Tweet'
import { tweetsArray } from './tools/constants'

function App() {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]} />
    </div>
  )
}

export default App
