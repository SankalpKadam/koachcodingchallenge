import React, { useRef, useState } from 'react'
import '../UserProfile/index.css'
import Mobile from '../../images/call.png'
import Address from '../../images/maps-and-flags.png'
import Mail from '../../images/mail.png'
const UserProfile = ({ email, phone, address }) => {
    const addressRef = useRef(null)
    const [shown, setShown] = useState(false)
    const userData = { email, phone, address }
    const handleClick = (e) => {
        e.preventDefault()
        addressRef.current.style.display=shown?"none":"block"
        setShown(!shown)
    }
    return (
        <div className="userProfile">
            <div className='mandatoryDetails'>

                <p className='userName'>
                    Leanne Graham
                </p>
                <p className='userID'>
                    #lg1234
                </p>
            </div>
            <div className='additionalDetails'>
                <p className='title'> User Details</p>
                <button className='showAdditional' onClick={handleClick}>Details  &#11206;
                </button>

            </div>
            <div className='desktopOnly' ref={addressRef}>

                <div className='showAdditionalDetails' >
                    <p>
                        Email
                    </p>
                    <p>
                        johnDoe@gmail.com
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        Phone
                    </p>
                    <p>
                        123-456-7890
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        Address
                    </p>
                    <p>
                        1234 Jane St., Louis Blvd. NYC - 32009
                    </p>
                </div>
                <div className='showAdditionalDetails'>
                    <p>
                        Website
                    </p>
                    <p>
                        hildegard.org
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
