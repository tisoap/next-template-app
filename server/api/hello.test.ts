import { createRequest, createResponse } from 'node-mocks-http'
import { hello } from './hello'
import type { HelloResponse } from './hello'
import type { NextApiRequest, NextApiResponse } from 'next'

describe('/api/hello handler', () => {
	test('responds 200 with message to GET', async () => {
		const request = createRequest<NextApiRequest>()
		const response = createResponse<NextApiResponse<HelloResponse>>()

		await hello(request, response)
		expect(response.statusCode).toBe(200)

		const responseBody = response._getJSONData() as HelloResponse
		expect(responseBody).toEqual({
			message: 'Hello! This message was fetched from a Next API route'
		})
	})
})
