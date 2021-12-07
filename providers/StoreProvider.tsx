import { Provider } from 'react-redux'
import { store } from './store'
import type { FunctionComponent } from 'react'

export const StoreProvider: FunctionComponent = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}
