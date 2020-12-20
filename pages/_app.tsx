import type { AppProps } from 'next/app'
import { ThemeProvider, StoreProvider } from 'providers'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<StoreProvider>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</StoreProvider>
	)
}

export default MyApp
