import React, { useEffect, useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const UserCard = ({ id, name }) => {

    return (
        <div className='userCard'>
            <div className='userListId'>
                {id}
            </div>
            <div className='userListName'>
                {name}
            </div>
            <button className='userListBtn'>
                <Link to={`users/${id}`} style={{textDecoration:'none', color:'#bcbcbc'}}>
                    See Details & Activity &gt;
                </Link>
            </button>
        </div >
    )
}

export default UserCard
