import React from 'react'
import { Link } from 'react-router-dom'
import UserCard from './UserCard'
import './index.css'
const ListUsers = () => {

    return (
        <div className='listUsers'>
            <p>
                Users
            </p>
            <div className='list'>

                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                <UserCard id={1}/>
                
            </div>
        </div>
    )
}

export default ListUsers
