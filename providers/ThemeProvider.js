import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types'

import { theme } from './theme'

export function ThemeProvider({ children }) {
	return (
		<ChakraProvider theme={theme} resetCSS>
			{children}
		</ChakraProvider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.node
}
