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
