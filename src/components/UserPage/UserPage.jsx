import React from 'react'
import UserProfile from './UserProfile/UserProfile'
import UserActivities from './UserActivities/UserActivities'
import './index.css'
const UserPage = () => {
  return (
    <div className='userPage'>
      <UserProfile/>
      <UserActivities/>
    </div>
  )
}

export default UserPage
