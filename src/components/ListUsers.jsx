import React from 'react'
import { Link } from 'react-router-dom'

const ListUsers = () => {
  return (
    <div>
      <Link to={'/users'}>Users</Link>
    </div>
  )
}

export default ListUsers
