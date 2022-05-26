import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = (params) => {
    const navigate = useNavigate()
    const [searchStr, setSearchStr] = useState('')
    function findUser(event) {
        params.setLoading(true)
        event.preventDefault();
        console.log('searchStr', searchStr)
        if (searchStr) {
            params.setUsername(searchStr)
            console.log('im gonna find', searchStr)
            navigate('/?login=' + searchStr + '&page=0')

        }

        else
            navigate('/initialstate')


    }
    return (
        <form className="search-form" onSubmit={(e) => findUser(e)}>
            <img src="././search_icon.png" alt='search icon' />
            <input type='text' onChange={e => setSearchStr(e.target.value)} value={searchStr} placeholder='Enter GitHub username' />
        </form>
    )
}