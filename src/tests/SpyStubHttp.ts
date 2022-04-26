import Http from "../Http";

export default class SpyStubHttp implements Http {
    get_returnValue: Promise<object> = Promise.resolve([])
    argument_get_url: string | undefined = undefined
    get(url: string): Promise<object> {
        this.argument_get_url = url
        return this.get_returnValue
    }
}