import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingCard = ({listCount}) => {
  // Loader component for the posts
  return (
        Array(listCount).fill(0).map((item, index)=>
        (
            <div className='loadingCard' key={index}>
                <Skeleton style={{height:'90%', width:"90%"}}/>
                <Skeleton style={{height:'90%', width:"98%"}}/>
                <Skeleton style={{height:'90%', width:"90%"}}/>
            </div>
        )
        )
  )
}

export default LoadingCard
