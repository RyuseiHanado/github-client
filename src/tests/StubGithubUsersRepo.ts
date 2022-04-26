import GithubUsersRepo from "../GithubUsersRepo";
import GithubUser from "../GithubUser";

export default class StubGithubUsersRepo implements GithubUsersRepo {
    getUsers_returnValue: Promise<GithubUser[]> = Promise.resolve([])

    getUsers(): Promise<GithubUser[]> {
        return this.getUsers_returnValue
    }
}