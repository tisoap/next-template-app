import { fireEvent, act, screen } from '@testing-library/react'
import appClient from 'api-client/app'
import { renderWithState } from 'utils/test-utils'
import type { PartialAppState } from 'utils/test-utils'

import { HomeContainer } from '.'

const initialState: PartialAppState = { hello: { message: 'Hello!' } }

describe('Home Container', () => {
	test('Renders fetched message', async () => {
		const options = { state: initialState }
		const newMessage = 'Test OK'
		const initialMessage = initialState.hello.message

		renderWithState(<HomeContainer />, options)
		await screen.findByText(initialMessage)

		const spy = jest.spyOn(appClient, 'getHello')
		const mockResponse = Promise.resolve({ message: newMessage })
		spy.mockReturnValue(mockResponse)

		const button = screen.getByText('Click me')
		await act(async () => fireEvent.click(button))
		await screen.findByText(newMessage)

		expect(appClient.getHello).toHaveBeenCalled()
	})

	test('Renders error message', async () => {
		const options = { state: initialState }
		const errorMessage = 'An error occurred'
		const initialMessage = initialState.hello.message

		renderWithState(<HomeContainer />, options)
		await screen.findByText(initialMessage)

		const spy = jest.spyOn(appClient, 'getHello')
		const mockResponse = Promise.reject({ message: errorMessage })
		spy.mockReturnValue(mockResponse)

		const button = screen.getByText('Click me')
		await act(async () => fireEvent.click(button))
		await screen.findByText(errorMessage)

		expect(appClient.getHello).toHaveBeenCalled()
	})
})
