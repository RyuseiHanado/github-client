import GithubUsersRepo from "../GithubUsersRepo";
import GithubUser from "../GithubUser";

export default class SpyStubGithubUsersRepo implements GithubUsersRepo {
    getUsers_returnValue: Promise<GithubUser[]> = Promise.resolve([])
    getUsers_wasCalled: boolean = false

    getUsers(): Promise<GithubUser[]> {
        this.getUsers_wasCalled = true
        return this.getUsers_returnValue
    }
}