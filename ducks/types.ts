import { HELLO_NAME } from './hello'
import type { HelloState } from './hello'

export type AppState = {
	[HELLO_NAME]: HelloState
}
