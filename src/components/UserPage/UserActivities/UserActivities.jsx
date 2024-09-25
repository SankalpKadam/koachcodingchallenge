import React, { useEffect, useRef, useState } from 'react'
import './UserActivity.css'
import ActivityCard from './subComponent/ActivityCard';
import LoadingCard from '../../Loaders/LoadingCard';
import Skeleton from 'react-loading-skeleton';
const UserActivities = ({id}) => {

    const [loading, setLoading] = useState(true)
    const [activities, setActivities] = useState([])
    const fetchActivities = async () => {
        try {
            //fetching posts for a particular user
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`,{
                method:'GET'
            })
            const result = await response.json()
            setActivities(result)
        } catch (error) {
            alert("Failed to fetch posts, please try again")
        }
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
                    /*Show loader component until data is fetched */
                    loading ? <LoadingCard listCount={5} /> : activities.map((item, index) => <ActivityCard id={index} title={item.title} body={item.body} key={index} />)
                }
            </div>
        </div>
    )
}

export default UserActivities
