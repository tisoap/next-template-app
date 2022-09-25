import { StrictMode } from 'react'
import { StoreProvider } from './Store'
import { ThemeProvider } from './Theme'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<StrictMode>
			<StoreProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</StoreProvider>
		</StrictMode>
	)
}
