import { AxiosPromise } from 'axios'

import { createApiClient } from './createApiClient'

const fetch = createApiClient('/api')

interface HelloResponse {
	message: string
}

const getHello = (): AxiosPromise<HelloResponse> =>
	fetch({ method: 'get', url: '/hello' })

const appClient = {
	getHello
}

export default appClient
