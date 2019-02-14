import React from 'react'
import Contact from './Contact'
import UserDetails from './UserDetails'

const User = props => {
  return (
    <div className='container'>
      <div className='user-heading'>
        <h4>{props.user.username}</h4>
        <Contact contactClass='contact' />
      </div>
      <div className='user-details'>
        <UserDetails sectionTitle='Name:' content={props.user.name} />
        <UserDetails sectionTitle='Email:' content={props.user.email} />
        <UserDetails sectionTitle='Company:' content={props.user.company.name} />
        <UserDetails sectionTitle='Website:' content={props.user.website} />
        <UserDetails sectionTitle='Location:' content={`lat.${props.user.address.geo.lat} long.${props.user.address.geo.lng}`} />
        <div className='phone-align'>
          <i className='fa fa-phone' /> <a href={`"tel:+${props.user.phone}"`}>{props.user.phone}</a>
        </div>
      </div>
    </div>
  )
}

export default User
