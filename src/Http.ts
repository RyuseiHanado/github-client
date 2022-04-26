export default interface Http {
    get(url: string): Promise<object>
}

export class NetworkHttp implements Http {
    async get(url: string): Promise<object> {
        const response = await fetch(url)
        return response.json()
    }
}