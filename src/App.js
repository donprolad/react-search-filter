import React, { Component } from 'react'
import UserList from './components/UserList'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h2>Team App</h2>
        <UserList />
      </div>
    )
  }
}

export default App
