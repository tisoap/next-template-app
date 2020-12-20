import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px'
})

const config = {
	useSystemColorMode: false,
	initialColorMode: 'light'
}

const global = {
	'html, body, #__next, #root': {
		height: '100%',
		width: '100%',
		minWidth: '320px',
		minHeight: '400px',
		padding: 0,
		margin: 0
	}
}

const styles = { global }

export const theme = extendTheme({ config, breakpoints, styles })
