import { ChakraProvider } from '@chakra-ui/react'
import type { FunctionComponent } from 'react'

import { theme } from './theme'

export const ThemeProvider: FunctionComponent = ({ children }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}
