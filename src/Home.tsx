import GithubUsersRepo from "./GithubUsersRepo";
import React, {useEffect, useState} from "react";
import GithubUser from "./GithubUser";

interface HomeProps {
    githubUsersRepo: GithubUsersRepo
}

export default function Home(props: HomeProps) {
    const [users, setUsers] = useState<GithubUser[]>([])

    useEffect(() => {
        props.githubUsersRepo.getUsers().then(result => {
            setUsers(result)
        })
    }, [])

    return (
        <>
            {users.map(user => (
                <p key={user.userName}>{user.userName}</p>
            ))}
        </>
    )

}