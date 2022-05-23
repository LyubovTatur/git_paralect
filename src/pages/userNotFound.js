import React, { useEffect } from "react";
import './userNotFound.css'

export const UserNotFound = (props) => {
    useEffect(()=>{
        // props.setLoading(false)
    },[])
    return (<div className="content">
        <div className="user_not_found">
            <div className="icon">
                    <img src="././Union.png" alt='user icon' />
            </div>
            <div className="text">
                User not found
            </div>
        </div>
    </div>)
}