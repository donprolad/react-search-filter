import React from 'react'
import axios from 'axios'
import './css/UserList.css'
import User from './User'

class UserList extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [],
      isLoaded: false,
      hasError: null,
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
    this.setState({ search: event.target.value.substr(0, 20) })
  }

  render () {
    const { hasError } = this.state.isLoaded

    let filteredUsers = this.state.users.filter(
      user => {
        return user.username.indexOf(this.state.search) !== -1 ||
          user.username.toLowerCase().indexOf(this.state.search) !== -1 ||
          user.name.indexOf(this.state.search) !== -1 ||
          user.email.toLowerCase().indexOf(this.state.search) !== -1 ||
          user.phone.indexOf(this.state.search) !== -1
      }
    )
    if (hasError) return <div><p>Error loading component</p></div>
    else {
      return (
        <div className='wrapper'>
          <div className='search'>
            <input type='text' tabIndex='0'
              value={this.state.search}
              onChange={this.updateSearch.bind(this)} />
          </div>
          {filteredUsers.map(user =>
            <div className='member member-shadow' key={user.id}>
              <User username={user.username}
                name={user.name}
                email={user.email}
                phone={user.phone}
                website={user.website}
                company={user.company.name}
                geo={user.address.geo} />
            </div>)
          }
        </div>
      )
    }
  }
}

export default UserList
