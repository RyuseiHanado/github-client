import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {act} from "react-dom/test-utils"
import Home from "../Home"
import SpyStubGithubUsersRepo from "./SpyStubGithubUsersRepo"

describe('home', () => {
    let spyStubGithubUsersRepo: SpyStubGithubUsersRepo

    beforeEach(() => {
        spyStubGithubUsersRepo = new SpyStubGithubUsersRepo()
    })

    test('GitHubのユーザー名の一覧が表示される', async () => {
        spyStubGithubUsersRepo.getUsers_returnValue = Promise.resolve([
            {userName: 'userName1'},
            {userName: 'userName2'},
        ])

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(<Home githubUsersRepo={spyStubGithubUsersRepo}/>)
        })

        expect(screen.getByText('userName1')).toBeInTheDocument()
        expect(screen.getByText('userName2')).toBeInTheDocument()
    })

    test('githubUsersRepoを呼んでいる', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(<Home githubUsersRepo={spyStubGithubUsersRepo}/>)
        })

        expect(spyStubGithubUsersRepo.getUsers_wasCalled).toBeTruthy()
    })
})
