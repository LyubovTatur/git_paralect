import React from "react";

export const RepositoryItem = (props) => {
    return (
        <div className="repo-item" key={props.repo.id}>
            {/* <h1>{repo.id}</h1> */}
            <a className="repo-title" href={props.repo.html_url} target="_blank"><div className="inside-a">{props.repo.name}</div></a>
            <div className="repo-desc">{props.repo.description}</div>
        </div>
    )
}