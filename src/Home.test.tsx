import React from 'react'
import {render, screen} from '@testing-library/react'
import GithubUsersRepo from "./GithubUsersRepo"
import GithubUser from "./GithubUser"
import '@testing-library/jest-dom'
import {act} from "react-dom/test-utils"
import Home from "./Home"


class StubGithubUsersRepo implements GithubUsersRepo {
    getUsers_returnValue: Promise<GithubUser[]> = Promise.resolve([])

    getUsers(): Promise<GithubUser[]> {
        return this.getUsers_returnValue
    }
}

describe('home', () => {
    let stubGithubUsersRepo: StubGithubUsersRepo

    beforeEach(() => {
        stubGithubUsersRepo = new StubGithubUsersRepo()
    })

    test('GitHubのユーザー名の一覧が表示される', async () => {
        stubGithubUsersRepo.getUsers_returnValue = Promise.resolve([
            {userName: 'userName1'},
            {userName: 'userName2'},
        ])

        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(<Home githubUsersRepo={stubGithubUsersRepo}/>)
        })

        expect(screen.getByText('userName1')).toBeInTheDocument()
        expect(screen.getByText('userName2')).toBeInTheDocument()
    })
})
