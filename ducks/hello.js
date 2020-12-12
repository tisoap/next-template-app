import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { appClient } from 'api-client'
import { createSelector } from 'reselect'

export const getHello = createAsyncThunk(
	'hello/getHello',
	async (args, { rejectWithValue }) => {
		try {
			const data = await appClient.getHello()
			return data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const hello = createSlice({
	name: 'hello',
	initialState: {
		loading: false,
		error: '',
		message: ''
	},
	extraReducers: {
		[getHello.fulfilled]: (state, action) => {
			state.loading = false
			state.error = ''
			state.message = action?.payload?.message || ''
		},
		[getHello.pending]: (state) => {
			state.loading = true
			state.error = ''
			state.message = ''
		},
		[getHello.rejected]: (state, action) => {
			state.loading = false
			state.error = action?.payload?.message || ''
			state.message = ''
		}
	}
})

export default hello.reducer

export const loadingSelector = createSelector(
	(state) => state?.hello?.loading,
	(loading) => Boolean(loading)
)

export const errorSelector = createSelector(
	(state) => state?.hello?.error,
	(error) => error || ''
)

export const helloSelector = createSelector(
	(state) => state?.hello?.message,
	(message) => message || ''
)
