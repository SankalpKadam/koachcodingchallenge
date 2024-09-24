import React, { useRef } from 'react'

const ActivityCard = ({id, title, body}) => {
    const myRef = useRef(null)
    const handleClick = (e) => {
        e.preventDefault()
        myRef.current.classList.toggle('toggle')

    }
    return (

        <div className='activityCard'>
            <div className='titleRow'>
                <p className='activityTitle'>{title}</p>
                <button className='showMore' onClick={handleClick}>+
                </button>
            </div>
            <p className='toggle activityBody' ref={myRef}>{body}</p>
        </div>

    )
}

export default ActivityCard
