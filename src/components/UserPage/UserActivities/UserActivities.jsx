import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import ActivityCard from './ActivityCard';
import LoadingCard from './LoadingCard';
import Skeleton from 'react-loading-skeleton';
const UserActivities = ({id}) => {

    const [loading, setLoading] = useState(true)
    const [activities, setActivities] = useState([])
    const fetchActivities = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        const result = await response.json()
        setActivities(result)
        setLoading(false)
    }
    useEffect(() => {
        setTimeout(() => {
            fetchActivities();
        }, 2000)
    }, [])
    return (
        <div className='userActivities'>
            <p className='title'>Activity Feed</p>
            <div className='cards'>
                {
                    loading ? <LoadingCard listCount={5} /> : activities.map((item, index) => <ActivityCard id={index} title={item.title} body={item.body} key={index} />)
                }
            </div>
        </div>
    )
}

export default UserActivities
