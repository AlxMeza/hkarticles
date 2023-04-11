import './App.css'
import { articles } from './helpers'
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Articles articles ={articles} />
    </div>
  )
}

export default App;
