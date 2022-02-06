import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

const semanticTokens = {
	colors: {
		background: {
			default: 'gray.50',
			_dark: 'gray.800'
		},
		foreground: {
			default: 'white',
			_dark: 'gray.700'
		}
	}
}

const styles = {
	global: (props: Dict | StyleFunctionProps) => ({
		'html, body, #__next, #root': {
			height: '100%',
			width: '100%',
			minWidth: '320px',
			minHeight: '400px',
			bg: mode('gray.50', 'gray.800')(props) as string,
			padding: 0,
			margin: 0
		}
	})
}

export const theme = extendTheme({ styles, semanticTokens })
