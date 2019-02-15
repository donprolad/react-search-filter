import React from 'react'

const UserDetails = props => {
  return (
    <>
      <label className='member-label'>{props.sectionTitle}</label>
      <p>{props.content}</p>
    </>
  )
}

export default UserDetails
