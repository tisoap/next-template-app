import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const getRequestData = (response: AxiosResponse) => response?.data ?? {}

const getErrorData = (error: AxiosError) => {
	const data = {
		message: error?.message ?? 'Unknown error',
		status: error?.response?.status ?? 0,
		data: error?.response?.data ?? {}
	}

	throw data
}

export const createApiClient = (url: string): AxiosInstance => {
	const api = axios.create({
		baseURL: url,
		timeout: 5000
	})

	api.interceptors.response.use(getRequestData, getErrorData)

	return api
}
