import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { merge, cloneDeep } from 'lodash'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { appInitialState } from 'ducks/state'
import { ThemeProvider } from 'providers'
import { rootReducer } from 'providers/Store/store'
import type { EnhancedStore } from '@reduxjs/toolkit'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { AppState } from 'ducks/state'
import type { ReactElement } from 'react'

const createStore = (state = {}) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: state
	})

type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>
}

export type PartialAppState = DeepPartial<AppState>

export interface Options extends RenderOptions {
	state: PartialAppState
}

export interface Result extends RenderResult {
	store: EnhancedStore
}

export const renderWithState = (
	component: ReactElement,
	options: Options
): Result => {
	const { state, ...renderOptions } = options
	const initialStateClone = cloneDeep(appInitialState)
	const customInitialState: AppState = merge(initialStateClone, state)
	const store = createStore(customInitialState)

	const view = render(
		<ThemeProvider>
			<StoreProvider store={store}>{component}</StoreProvider>
		</ThemeProvider>,
		renderOptions
	)

	return {
		...view,
		store
	}
}
