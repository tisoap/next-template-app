import { fireEvent, render, screen } from '@testing-library/react'

import { Home } from '.'

describe('Button', () => {
	test('Renders message', () => {
		const fn = jest.fn()
		const message = 'My Button'
		render(<Home onClick={fn} message={message} />)
		expect(screen.getByText(message)).toBeInTheDocument()
	})

	test('Calls onClick function on button click event', () => {
		const fn = jest.fn()
		render(<Home onClick={fn} />)
		fireEvent.click(screen.getByRole('button'))
		expect(fn).toHaveBeenCalled()
	})

	test('Does not call onClick if loading', () => {
		const fn = jest.fn()
		render(<Home onClick={fn} loading />)
		fireEvent.click(screen.getByRole('button'))
		expect(fn).not.toHaveBeenCalled()
	})
})
