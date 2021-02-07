import { extendTheme } from '@chakra-ui/react'

const globalStyles = {
	'html, body, #__next, #root': {
		height: '100%',
		width: '100%',
		minWidth: '320px',
		minHeight: '400px',
		padding: 0,
		margin: 0
	}
}

const styles = { global: globalStyles }

export const theme = extendTheme({ styles })
