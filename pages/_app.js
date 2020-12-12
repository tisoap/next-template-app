import PropTypes from 'prop-types'
import { ThemeProvider, StoreProvider } from 'providers'

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</StoreProvider>
	)
}

export default MyApp

MyApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object
}
