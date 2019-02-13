import React from 'react'
import Contact from './Contact'

const User = props => {
  return (
    <div className='container'>
      <div className='user-heading'>
        <h4>{props.username}</h4>
        <Contact contactClass='contact' />
      </div>
      <address className='address'>
        <label className='member-label'>Name:</label>
        <p>{props.name}</p>
        <label className='member-label'>Email:</label>
        <p><a href={`"mailto:${props.email}"`}>{props.email}</a></p>
        <hr className='user-hr' />
        <label className='member-label'>Company:</label>
        <p>{props.company}</p>
        <label className='member-label'>Website:</label>
        <p><a href={props.website}>{props.website}</a></p>
        <hr className='user-hr' />
        <label className='member-label'>Location:</label>
        <p>lat.{props.geo.lat} long.{props.geo.lng}</p>
        <hr className='user-hr' />
        <div className='phone-align'>
          <i className='fa fa-phone' /> <a href={`"tel:+${props.phone}"`}>{props.phone}</a>
        </div>
      </address>
    </div>
  )
}

export default User
