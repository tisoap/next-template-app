import { getHello, loadingSelector, messageSelector } from 'ducks/hello'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Home } from '../presentation'

const mapStateToProps = createStructuredSelector({
	message: messageSelector,
	loading: loadingSelector
})

const mapDispatchToProps = { onClick: getHello }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export const HomeContainer = addReduxProps(Home)
