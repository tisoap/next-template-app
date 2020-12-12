import axios from 'axios'

const getRequestData = (response) => response?.data ?? {}

const getErrorData = (error) => {
	const data = {
		message: error?.message ?? 'Unknown error',
		status: error?.response?.status ?? 0,
		data: error?.response?.data ?? {}
	}

	throw data
}

export const createApiClient = (url) => {
	const api = axios.create({
		baseURL: url,
		timeout: 5000
	})

	api.interceptors.response.use(getRequestData, getErrorData)

	return api
}
