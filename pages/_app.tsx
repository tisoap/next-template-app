import { ThemeProvider, StoreProvider } from 'providers'
import type { AppProps } from 'next/app'

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
