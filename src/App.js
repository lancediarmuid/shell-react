import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
