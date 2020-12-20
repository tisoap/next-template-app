import { ChakraProvider } from '@chakra-ui/react'
import type { FC } from 'react'

import { theme } from './theme'

export const ThemeProvider: FC = ({ children }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}
