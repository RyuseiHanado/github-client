import {NetWorkGithubUsersRepo} from "../GithubUsersRepo";
import SpyStubHttp from "./SpyStubHttp";


describe('GithubUsersRepo', () => {
    describe('getUsers', () => {
        let spyStubHTTP: SpyStubHttp

        beforeEach(() => {
            spyStubHTTP = new SpyStubHttp()
        })

        test('JSONをparseしてGithubUserの配列を返す', async () => {
            spyStubHTTP.get_returnValue = Promise.resolve([
                {'login': 'userName1'},
                {'login': 'userName2'},
            ])
            const githubUsersRepo = new NetWorkGithubUsersRepo(spyStubHTTP)


            const actualUsers = await githubUsersRepo.getUsers()


            expect(actualUsers).toEqual([
                {userName: 'userName1'},
                {userName: 'userName2'},
            ])
        })

        test('httpにGitHub APIのURLを渡している', async () => {
            const githubUsersRepo = new NetWorkGithubUsersRepo(spyStubHTTP)


            await githubUsersRepo.getUsers()


            expect(spyStubHTTP.argument_get_url).toEqual('https://api.github.com/users')
        })
    })
})