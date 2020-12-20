import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appClient } from 'api-client'
import { createSelector } from 'reselect'

import type { AppState } from './types'

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

const initialState: HelloState = {
	loading: false,
	error: '',
	message: ''
}

const hello = createSlice({
	name: HELLO_NAME,
	initialState,
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
			state.error = action.error.message
			state.message = ''
		})
	}
})

export default hello.reducer

export const loadingSelector = createSelector<AppState, boolean, boolean>(
	(state) => state.hello.loading,
	(loading) => loading
)

export const errorSelector = createSelector<AppState, string, string>(
	(state) => state.hello.error,
	(error) => error
)

export const helloSelector = createSelector<AppState, string, string>(
	(state) => state.hello.message,
	(message) => message
)
