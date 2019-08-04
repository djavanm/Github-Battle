import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component 
// State
// LifeCycle
// UI

class App extends React.Component {
  render() {
    return (
    <div>
      Hello World!
    </div>
    )
  }
}

ReactDOM.render(
  // React Element
  // Where to render the element to
  <App />,
  document.getElementById('app')
)