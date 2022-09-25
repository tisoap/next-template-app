import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { merge, cloneDeep } from 'lodash'
import { StrictMode } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { initialState } from 'providers/Store'
import { rootReducer } from 'providers/Store/store'
import { ThemeProvider } from 'providers/Theme'
import type { EnhancedStore } from '@reduxjs/toolkit'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { AppState } from 'providers/Store'
import type { ReactElement } from 'react'
import type { PartialDeep } from 'type-fest'

const createStore = (state: AppState) =>
	configureStore({
		reducer: rootReducer,
		preloadedState: state
	})

export type PartialAppState = PartialDeep<AppState>

export interface Options extends RenderOptions {
	state?: PartialAppState
}

export interface Result extends RenderResult {
	store: EnhancedStore
}

export const renderWithProviders = (
	component: ReactElement,
	options: Options = {}
): Result => {
	const { state = {}, ...renderOptions } = options
	const initialStateClone = cloneDeep(initialState)
	const customInitialState: AppState = merge(initialStateClone, state)
	const store = createStore(customInitialState)

	const view = render(
		<StrictMode>
			<ThemeProvider>
				<StoreProvider store={store}>{component}</StoreProvider>
			</ThemeProvider>
		</StrictMode>,
		renderOptions
	)

	return {
		...view,
		store
	}
}
