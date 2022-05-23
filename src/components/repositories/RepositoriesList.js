import React from "react";
import { RepositoryItem } from "./RepositoryItem";

export const RepositoriesList = (props) => {
    return (
        <div className="repo-list">
            {props.repos ? props.repos.map(repo => (
                <RepositoryItem repo={repo} />
            )) : <h1>Loading...</h1>
            }
        </div>
    )
}