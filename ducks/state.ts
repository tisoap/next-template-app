import { HELLO_NAME, helloInitialState } from './hello'
import type { HelloState } from './hello'

export type AppState = {
	[HELLO_NAME]: HelloState
}

export const appInitialState: AppState = {
	[HELLO_NAME]: helloInitialState
}
