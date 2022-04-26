import GithubUser from "./GithubUser";

export default interface GithubUsersRepo {
    getUsers(): Promise<GithubUser[]>
}

export class NetWorkGithubUsersRepo implements GithubUsersRepo {
    getUsers(): Promise<GithubUser[]> {
        return Promise.resolve([]);
    }
}