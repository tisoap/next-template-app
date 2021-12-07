import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import appClient from 'api-client/app'
import { renderWithState } from 'utils/test-utils'
import { HomeContainer } from '.'
import type { PartialAppState } from 'utils/test-utils'

const initialState: PartialAppState = { hello: { message: 'Hello!' } }

describe('Home Container', () => {
	test('Renders empty message', async () => {
		const options = { state: { hello: { message: '' } } }
		renderWithState(<HomeContainer />, options)
		await screen.findByText('...?')
	})

	test('Renders fetched message', async () => {
		const options = { state: initialState }
		const newMessage = 'Test OK'
		const initialMessage = initialState.hello?.message || ''

		renderWithState(<HomeContainer />, options)
		await screen.findByText(initialMessage)

		const spy = jest.spyOn(appClient, 'getHello')
		const mockResponse = Promise.resolve({ message: newMessage })
		spy.mockReturnValue(mockResponse)

		const button = screen.getByText('Click me')
		userEvent.click(button)
		await screen.findByText(newMessage)

		expect(appClient.getHello).toHaveBeenCalled()
	})

	test('Renders error message', async () => {
		const options = { state: initialState }
		const errorMessage = 'An error occurred'
		const initialMessage = initialState.hello?.message || ''

		renderWithState(<HomeContainer />, options)
		await screen.findByText(initialMessage)

		const spy = jest.spyOn(appClient, 'getHello')
		const mockResponse = Promise.reject({ message: errorMessage })
		spy.mockReturnValue(mockResponse)

		const button = screen.getByText('Click me')
		userEvent.click(button)
		await screen.findByText(errorMessage)

		expect(appClient.getHello).toHaveBeenCalled()
	})

	test('Renders empty error message', async () => {
		const options = { state: initialState }
		const initialMessage = initialState.hello?.message || ''

		renderWithState(<HomeContainer />, options)
		await screen.findByText(initialMessage)

		const spy = jest.spyOn(appClient, 'getHello')
		const mockResponse = Promise.reject({ message: '' })
		spy.mockReturnValue(mockResponse)

		const button = screen.getByText('Click me')
		userEvent.click(button)
		await screen.findByText('...?')

		expect(appClient.getHello).toHaveBeenCalled()
	})
})
