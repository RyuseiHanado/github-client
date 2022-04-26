import {render} from "@testing-library/react"
import App from "../App"
import {act} from "react-dom/test-utils"

describe('App', () => {
    test('Homeに必要なpropsを渡してレンダリングしている', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await render(<App/>)
        })
    })
})