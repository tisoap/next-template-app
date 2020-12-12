import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { store } from './store'

export const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

StoreProvider.propTypes = {
	children: PropTypes.node
}
