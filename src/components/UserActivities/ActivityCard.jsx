import React, { useRef } from 'react'

const ActivityCard = ({ id, title, body, showDate }) => {
    const myRef = useRef(null)
    const handleClick = (e) => {
        e.preventDefault()
        myRef.current.classList.toggle('toggle')

    }
    return (
        <>
            <div className='activityCard'>
                <div className='titleRow'>
                    <p className='activityTime'>11:20 AM</p>
                    <p className='activityTitle'>{title}</p>
                    <button className='showMore' onClick={handleClick}>Details  &#11206;
                    </button>
                </div>
                <p className='toggle activityBody' ref={myRef}>{body}</p>
            </div>

        </>
    )
}

export default ActivityCard
