import React from 'react'
import Home from "./Home";
import {NetWorkGithubUsersRepo} from "./GithubUsersRepo";

export default function App() {
    const githubUsersRepo = new NetWorkGithubUsersRepo()
    return (
        <Home githubUsersRepo={githubUsersRepo}/>
    )
}

