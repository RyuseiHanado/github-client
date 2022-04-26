import React from 'react'
import Home from "./Home"
import {NetWorkGithubUsersRepo} from "./GithubUsersRepo"
import {NetworkHttp} from "./Http";

export default function App() {
    const networkHttp = new NetworkHttp()
    const githubUsersRepo = new NetWorkGithubUsersRepo(networkHttp)
    return (
        <Home githubUsersRepo={githubUsersRepo}/>
    )
}

