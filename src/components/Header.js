import React from "react";
import './Header.css'
import { SearchForm } from "./SearchForm";

export const Header = (params) => {
    return (
        <header>
            <div className="frame">
                <img className="header-logo" src="././Vector.png" alt="git pussy" />
            </div>
            <SearchForm username={params.username} setUsername={params.setUsername}/>
        </header>
    )
}