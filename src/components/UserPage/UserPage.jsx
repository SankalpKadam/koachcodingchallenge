import React from 'react'
import UserProfile from './UserProfile/UserProfile'
import UserActivities from './UserActivities/UserActivities'
import './UserPage.css'
import { useParams } from 'react-router-dom'
const UserPage = () => {
    const {id} = useParams()
  return (
    <div className='userPage'>
      <UserProfile id={id}/>
      <UserActivities id={id}/>
    </div>
  )
}

export default UserPage
