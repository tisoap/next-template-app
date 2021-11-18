import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appClient } from 'api-client'
import { createSelector } from 'reselect'

import type { AppState } from './state'

export const getHello = createAsyncThunk('hello/getHello', async () => {
	const data = await appClient.getHello()
	return data
})

export type HelloState = {
	loading: boolean
	error: string
	message: string
}

export const HELLO_NAME = 'hello'

export const helloInitialState: HelloState = {
	loading: false,
	error: '',
	message: ''
}

const hello = createSlice({
	name: HELLO_NAME,
	initialState: helloInitialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getHello.fulfilled, (state, action) => {
			state.loading = false
			state.error = ''
			state.message = action.payload.message
		})

		builder.addCase(getHello.pending, (state) => {
			state.loading = true
			state.error = ''
			state.message = ''
		})

		builder.addCase(getHello.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message || ''
			state.message = ''
		})
	}
})

export default hello.reducer

export const loadingSelector = createSelector(
	(state: AppState) => state.hello.loading,
	(loading) => loading
)

export const errorSelector = createSelector(
	(state: AppState) => state.hello.error,
	(error) => error
)

export const helloSelector = createSelector(
	(state: AppState) => state.hello.message,
	(message) => message
)

export const messageSelector = createSelector(
	[errorSelector, helloSelector],
	(error, message) => (error ? error : message)
)
