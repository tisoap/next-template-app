import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Home } from '.'

describe('Button', () => {
	test('Renders message', () => {
		const fn = jest.fn()
		const message = 'My Button'
		const { getByText } = render(<Home onClick={fn} message={message} />)
		expect(getByText(message)).toBeInTheDocument()
	})

	test('Calls onClick function on button click event', () => {
		const fn = jest.fn()
		const { getByRole } = render(<Home onClick={fn} />)
		fireEvent.click(getByRole('button'))
		expect(fn).toHaveBeenCalled()
	})

	test('Does not call onClick if loading', () => {
		const fn = jest.fn()
		const { getByRole } = render(<Home onClick={fn} loading />)
		fireEvent.click(getByRole('button'))
		expect(fn).not.toHaveBeenCalled()
	})
})
