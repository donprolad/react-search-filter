import React from 'react'
import './css/Contact.css'

const Contact = props => {
  return (
    <div className={props.contactClass}>
      <a href={props.chat}><i className='fas fa-comment chat' /></a>
      <a href={props.email}><i className='fa fa-phone phone' /></a>
      <a href={props.phone}><i className='fa fa-envelope email' /></a>
    </div>
  )
}

export default Contact
