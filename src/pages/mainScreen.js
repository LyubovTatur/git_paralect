import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RepositoriesList } from "../components/repositories/RepositoriesList";
import { ReposNavPanel } from "../components/repositories/ReposNavPanel";
import './mainScreen.css'

export const MainScreen = (params) => {
    const per_page = 4
    const [page, setPage] = useState(0)
    const userReqStr = 'https://api.github.com/users/'
    const navigate = useNavigate()
    const [repos, setRepos] = useState('')
    function getUserInfoByUsername(username) {
        // params.setLoading(true)

        if (!username)
            console.log('ds')
        // navigate('/', { replace: true })
        else {
            console.log('will send request:', userReqStr + username)
            fetch(userReqStr + username)
                .catch(error => {
                    console.log('it seems that there is no such user like', username)
                })
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (json) {
                            console.log('successful getting user info')
                            // navigate('/?login=' + json.login, { replace: true })
                            setUserInfo(json)
                            // return json
                            // initialize();
                            params.setLoading(false)

                        });
                    } else {
                        console.log('Network request for https://api.github.com/users/ failed with response ' + response.status + ': ' + response.statusText);
                        console.log(response);
                        params.setLoading(false)
                        navigate('/user_not_found', { replace: true })

                    }
                });
        }

    }

    function getRepos(username) {

        console.log('ill find some repos..')
        console.log('im going to fetch', userReqStr + username + `/repos?per_page=${per_page}&page=${Number(page) + 1}`)
        const result = fetch(userReqStr + username + `/repos?per_page=${per_page}&page=${Number(page) + 1}`)
            .catch(e => console.log('error while getting repos..', e.error))
            .then((response) => {
                if (response.ok) {
                    response.json().then(function (json) {
                        console.log('successful getting repos')
                        console.log(json)
                        // navigate('/?login=' + json.login, { replace: true })
                        // return json
                        setRepos(json)
                        // initialize();
                    });
                } else {
                    console.log('Network request for https://api.github.com/users/USERNAME/repos failed with response ' + response.status + ': ' + response.statusText);
                    console.log(response);
                    navigate('/user_not_found', { replace: true })

                }
            })
        // params.setLoading(false)


        // result.then(() => { return final })

    }
    const [userInfo, setUserInfo] = useState('')
    useEffect(() => {
        params.setLoading(true)

        const p = new Promise((resolve, reject) => {
            const temp = (new URL(document.location)).searchParams
            console.log(temp.get('login'))
            if (!temp.get('login')) navigate('/initialstate')
            else {
                params.setUsername(temp.get('login'))
                getUserInfoByUsername(temp.get('login'))
                getRepos(temp.get('login'))
                setPage(Number(temp.get('page')))
            } resolve()
        })

        .then(() => setInterval(()=>params.setLoading(false),3000))


    }, [params.username, page])
    return (
        <div className="main-screen">
            {params.isloading ? <div className="loader"></div> :

                <Fragment>
                    <div className="user-block">
                        <img src={userInfo.avatar_url} className='user_avatar' alt="user_avatar" />
                        <div className="full-name">{userInfo.name}</div>
                        <a href={userInfo.html_url} target="_blank" className="login">{userInfo.login}</a>
                        <div className="people">
                            <div className="followers">
                                <img src='././shared.png' alt="shared.png" />
                                {userInfo.followers} followers
                            </div>
                            <div className="following">
                                <img src='././provate.png' alt="provate.png" />
                                {userInfo.following} following
                            </div>
                        </div>
                    </div>
                    <div className="repositories-block">
                        {userInfo.public_repos
                            ?
                            <div className="">
                                <h1 className="repositories-header">Repositories ({userInfo.public_repos}) </h1>
                                <RepositoriesList repos={repos} />
                                <ReposNavPanel login={userInfo.login} pageNum={page} reposCount={userInfo.public_repos} setPage={setPage} />
                            </div>
                            :
                            <img src="././emptyRepoList.png" className="no-repositories"></img>
                        }
                    </div>
                </Fragment>
            }
        </div>
    )
}