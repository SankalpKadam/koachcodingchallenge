import React, { useEffect, useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const UserCard = ({ id, name }) => {
// Component for rendering individual user card on the home page
    return (
        <div className='userCard'>
            <div className='userListId'>
                {id}
            </div>
            <div className='userListName'>
                {name}
            </div>
            <button className='userListBtn'>
                {/* Setting link to user details and posts */}
                <Link to={`users/${id}`} style={{textDecoration:'none', color:'#bcbcbc'}}>
                    See Details & Activity &gt;
                </Link>
            </button>
        </div >
    )
}

export default UserCard
