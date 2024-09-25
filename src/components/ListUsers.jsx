import React, { useEffect, useMemo, useState } from 'react'
import UserCard from './UserCard'
import './index.css'
import AbstactUserCard from './AbstactUserCard'
const ListUsers = () => {
    const [userList, setList] = useState([])
    const [loading, setLoading] = useState(true)
    // Fetch all users from the API
    const fetchUsers = async () => {
        try {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/users/',{
                method:'GET'
            })
            const result = await response.json()
            setList(result)
        } catch (error) {
            alert("Refresh the page some error occured")    
        }
        setLoading(false)
    }

    useEffect(() => {
            fetchUsers()
    }, [])
    return (
        <div className='listUsers'>
            <p className='userName'>
                Users
            </p>
            <div className='list'>
                {
                    /* showing loading component until data is fetched */
                }
                {loading ? <AbstactUserCard /> : userList.map((item, index) => <UserCard id={item.id} name={item.name} key={item.id} />)}
            </div>
        </div>
    )
}

export default ListUsers
