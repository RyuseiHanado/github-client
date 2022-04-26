import GithubUser from "./GithubUser";
import Http from "./Http";

export default interface GithubUsersRepo {
    getUsers(): Promise<GithubUser[]>
}

interface GithubApiResponse {
    login: string
}

export class NetWorkGithubUsersRepo implements GithubUsersRepo {
    private http: Http

    constructor(http: Http) {
        this.http = http
    }

    async getUsers(): Promise<GithubUser[]> {
        const url = "https://api.github.com/users"
        const users = await this.http.get(url) as GithubApiResponse[]
        return users.map(user => {return {userName: user.login }})
    }
}