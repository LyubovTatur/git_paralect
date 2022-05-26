import React, { useEffect } from "react";
// import './initialState.css'

export const InitialState = (props) => {
    useEffect(()=>{
        // props.setLoading(false)
    },[])
    return (
        <div className="initial-state">
                <div className="icon">
                    <img src="././big_search_icon.png" alt='search icon' />
                </div>
                <div className="text">
                    Start with searching a GitHub user
                </div>
        </div>
    )
}