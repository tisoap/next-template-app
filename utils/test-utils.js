import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { rootReducer } from 'providers/store'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

const createStore = (state = {}) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: state
	})

export const renderWithState = (component, options = {}) => {
	const { state = {}, ...rest } = options

	const store = createStore(state)

	const result = render(
		<StoreProvider store={store}>{component}</StoreProvider>,
		rest
	)

	return {
		...result,
		store
	}
}
