import Http, {NetworkHttp} from "../Http";

describe('NetworkHttp', () => {
    describe('get request', () => {
        let networkHttp: Http

        beforeEach(() => {
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve([{test: '100'}]),
                }),
            ) as jest.Mock

            networkHttp = new NetworkHttp()
        })

        test('fetchに正しくurlの引数を渡している', async () => {
            await networkHttp.get('https://api.github.com/users')


            expect(global.fetch).lastCalledWith('https://api.github.com/users')
        })

        test('fetchが正しくresponse JSONを返す', async () => {
            const responseJsonAsObject = await networkHttp.get('')


            expect(responseJsonAsObject).toEqual([{test: '100'}])
        })
    })
})