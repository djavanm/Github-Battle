import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Component 
// State
// LifeCycle
// UI

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route exact path='/' component={Popular}/>
          <Route path='/battle' component={Battle}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  // React Element
  // Where to render the element to
  <App />,
  document.getElementById('app')
)