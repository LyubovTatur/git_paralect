import React from "react";
// import './Header.css'
import { SearchForm } from "./SearchForm";

export const Header = (params) => {
    return (
        <header>
            <img className="header-logo" src="././Vector.png" alt="git pussy" />
            <SearchForm setLoading={params.setLoading} username={params.username} setUsername={params.setUsername} />
        </header>
    )
}