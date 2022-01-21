import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { hello } from 'ducks'

export const reducers = {
	hello
}

export const rootReducer = combineReducers(reducers)

export const store = configureStore({
	reducer: rootReducer
})
