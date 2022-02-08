import axios from 'axios'
import type { CountResponse } from 'pages/api/count'

export const api = axios.create({
	baseURL: '/api',
	timeout: 5000
})

const fetchCount = async () => {
	const response = await api.get<CountResponse>('/count')
	return response.data.count
}

export const apiClient = {
	fetchCount
}
