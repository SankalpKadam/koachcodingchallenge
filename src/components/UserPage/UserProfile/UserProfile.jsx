import React, { useEffect, useRef, useState } from 'react'
import './UserProfile.css'
import Skeleton from 'react-loading-skeleton'
const UserProfile = ({ id }) => {
    const addressRef = useRef(null)
    const [user, setUser] = useState({})
    const [shown, setShown] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        addressRef.current.style.display = shown ? "none" : "block"
        setShown(!shown)
    }
    const fetchUser = async () => {
        try {
            // fetch individual user
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const result = await response.json()
            setUser(result)
        } catch (error) {
            alert("Failed to fetch user, please retry")
        }

    }
    useEffect(() => {
        setTimeout(() => {
            fetchUser()
        }, 1000)//deliberately added delay to show loading state
    }, [])
    return (
        <div className="userProfile">
            <div className='mandatoryDetails'>

                <p className='userName'>
                    {user.name || <Skeleton /> /* shows loader component until name is not fetched */}
                </p>
                <p className='userID'>
                    {user.username || <Skeleton />}
                </p>
            </div>
            <div className='additionalDetails'>
                <p className='title'> User Details</p>
                <button className='showAdditionalBtn' onClick={handleClick}>Details  &#11206;
                </button>

            </div>
            <div className='desktopOnly' ref={addressRef}>

                <div className='showAdditionalDetails' >
                    <p>
                        {user.email ? "Email" : <Skeleton />}
                    </p>
                    <p>
                        {user.email || <Skeleton />}
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user.phone ? "Phone" : <Skeleton />}
                    </p>
                    <p>
                        {user.phone ? user.phone.split(' ')[0] : <Skeleton />}
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user.address ? "Address" : <Skeleton />}
                    </p>
                    <p>
                        {
                            user.address ? user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode : <Skeleton />
                        }
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user.website ? "Website" : <Skeleton />}
                    </p>
                    <p>
                        {user.website || <Skeleton />}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
