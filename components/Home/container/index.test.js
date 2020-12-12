import { fireEvent, cleanup, act } from '@testing-library/react'
import appClient from 'api-client/app'
import { renderWithState } from 'utils/test-utils'

import { HomeContainer } from '.'

const initialState = {
	hello: {
		loading: false,
		error: '',
		message: 'Hello!'
	}
}

describe('Home Container', () => {
	afterEach(() => {
		cleanup()
		jest.restoreAllMocks()
	})

	test('Renders fetched message', async () => {
		const options = { state: initialState }
		const newMessage = 'Test OK'
		const initialMessage = initialState.hello.message

		const { getByText } = renderWithState(<HomeContainer />, options)
		expect(getByText(initialMessage)).toBeInTheDocument()

		jest
			.spyOn(appClient, 'getHello')
			.mockImplementation(() => Promise.resolve({ message: newMessage }))

		const button = getByText('Click me')
		await act(async () => fireEvent.click(button))

		expect(appClient.getHello).toHaveBeenCalled()
		expect(getByText(newMessage)).toBeInTheDocument()
	})
})
