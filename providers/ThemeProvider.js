import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './theme'

export function ThemeProvider({ children }) {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}
