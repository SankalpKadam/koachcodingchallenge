import React, { useEffect, useMemo, useState } from 'react'
import UserCard from './UserCard'
import './index.css'
import AbstactUserCard from './AbstactUserCard'
const ListUsers = () => {
    const [userList, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/')
        const result = await response.json()
        setList(result)
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
                {loading ? <AbstactUserCard /> : userList.map((item, index) => <UserCard id={item.id} name={item.name} key={item.id} />)}
            </div>
        </div>
    )
}

export default ListUsers
