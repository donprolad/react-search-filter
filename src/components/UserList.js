import React from 'react'
import axios from 'axios'
import './css/UserList.css'
import User from './User'

class UserList extends React.Component {
  constructor () {
    super()
    this.textInput = React.createRef()
    this.state = {
      users: [],
      isLoaded: false,
      hasError: false,
      search: ''
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ users: res.data }),
        err => this.setState({ hasError: err }))
      .catch(err => console.log(err))
  }

  updateSearch (event) {
    // this.setState({ search: event.target.value.substr(0, 20) })
    this.setState({ search: this.textInput.current.value })
  }

  render () {
    const { hasError } = this.state.hasError

    let filteredUsers = this.state.users.filter(
      user => {
        return user.username.includes(this.state.search) ||
        user.username.toLowerCase().includes(this.state.search) ||
        user.name.includes(this.state.search) ||
        user.name.toLowerCase().includes(this.state.search) ||
        user.email.includes(this.state.search) ||
        user.email.toLowerCase().includes(this.state.search) ||
        user.phone.includes(this.state.search)
      }
    )
    if (hasError) return <div><p>Error loading component</p></div>
    else {
      return (
        <div className='wrapper'>
          <div className='search'>
            <input type='text' tabIndex='0' ref={this.textInput}
              // value={this.state.search}
              onChange={this.updateSearch.bind(this)} />
          </div>
          {filteredUsers.map(user =>
            <div className='member member-shadow' key={user.id}>
              <User user={user} />
            </div>)
          }
        </div>
      )
    }
  }
}

export default UserList
