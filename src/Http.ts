export default interface Http {
    get(url: string): Promise<object>
}

export class NetworkHttp implements Http{
    get(url: string): Promise<object> {
        return Promise.resolve([]);
    }
}