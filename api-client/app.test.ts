import appClient, { api } from './app'

describe('app api client', () => {
	test('getHello', async () => {
		const testData = { message: 'test' }
		const spy = jest.spyOn(api, 'get')
		const mockResponse = Promise.resolve({ data: testData })

		spy.mockReturnValue(mockResponse)
		const response = await appClient.getHello()

		expect(api.get).toHaveBeenCalledWith('/hello')
		expect(response).toEqual(testData)
	})
})
