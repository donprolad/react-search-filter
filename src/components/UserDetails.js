import React from 'react'

const UserDetails = props => {
  console.log(props.content)
  return (
    <div>
      <label className='member-label'>{props.sectionTitle}</label>
      <p>{props.content}</p>
    </div>
  )
}

export default UserDetails
