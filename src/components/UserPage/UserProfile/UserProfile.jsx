import React, { useEffect, useRef, useState } from 'react'
import './UserProfile.css'
import Skeleton from 'react-loading-skeleton'
const UserProfile = ({ id }) => {
    const addressRef = useRef(null)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const handleClick = (e) => {
        e.preventDefault()
        addressRef.current.classList.toggle('showIt')
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
        setLoading(false)

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
                    {loading?<Skeleton />:user["name"] || "User Name Placeholder" /* shows loader component until name is not fetched and shows placeholder if user.name is not in the user object*/}
                </p>
                <p className='userID'>
                    {loading?<Skeleton />:user["username"] || "User Name Placeholder"}
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
                        {user["email"] ? "Email" : <Skeleton />}
                    </p>
                    <p>
                        {loading?<Skeleton />:user["email"] || "User Email Placeholder"}
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user["phone"] ? "Phone" : <Skeleton />}
                    </p>
                    <p>
                        {loading?<Skeleton />: user["phone"] ? user["phone"].split(' ')[0] : "123-456-7890"}
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user["address"] ? "Address" : <Skeleton />}
                    </p>
                    <p>
                        {
                            loading?<Skeleton />:user["address"] ? user["address"]["street"] + ", " + user["address"]["suite"] + ", " + user["address"]["city"] + ", " + user["address"]["zipcode"] : "Address placeholder"
                        }
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        {user["website"] ? "Website" : <Skeleton />}
                    </p>
                    <p>
                        {loading?<Skeleton />:user["website"] || "Website placeholder"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
