import axios from 'axios'
import type { HelloResponse } from 'pages/api/hello'

export const api = axios.create({
	baseURL: '/api',
	timeout: 5000
})

const getHello = async (): Promise<HelloResponse> => {
	const response = await api.get<HelloResponse>('/hello')
	return response.data
}

const appClient = {
	getHello
}

export default appClient
