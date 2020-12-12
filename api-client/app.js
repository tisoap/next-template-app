import { createApiClient } from './createApiClient'

const fetch = createApiClient('/api')

const getHello = () => fetch({ method: 'get', url: '/hello' })

const appClient = {
	getHello
}

export default appClient
