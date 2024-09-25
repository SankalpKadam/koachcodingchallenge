import React from 'react'
import Skeleton from 'react-loading-skeleton'

const AbstactUserCard = () => {
  // Loading component
  return (
    Array(10).fill(0).map((item, index) => (
      <div className='userCard' key={index}>
        <Skeleton className='userListId' />
        <Skeleton className='userListName' />
        <Skeleton className='userListBtn' />
      </div>
    ))
  )
}

export default AbstactUserCard
