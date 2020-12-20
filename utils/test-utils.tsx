import { configureStore } from '@reduxjs/toolkit'
import type { EnhancedStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { AppState } from 'ducks/state'
import { appInitialState } from 'ducks/state'
import { merge } from 'lodash'
import { rootReducer } from 'providers/store'
import React from 'react'
import type { ReactElement } from 'react'
import { Provider as StoreProvider } from 'react-redux'

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
	const { state, ...rest } = options
	const initialState: AppState = merge(appInitialState, state)
	const store = createStore(initialState)

	const result = render(
		<StoreProvider store={store}>{component}</StoreProvider>,
		rest
	)

	return {
		...result,
		store
	}
}
