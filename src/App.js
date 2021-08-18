import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Room from './pages/room'
import Home from './pages/home'
import RoomState from './context/RoomState'

function App() {
  return (
    <div className="App">
      <RoomState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/room" component={Room} />
          </Switch>
        </Router>
      </RoomState>
    </div>
  )
}

export default App
