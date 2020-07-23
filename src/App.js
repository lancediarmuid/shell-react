import React from 'react'
import logo from './logo.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Dashboard />
      </div>
    )
  }
}

export default App
