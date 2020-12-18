import { themes } from '@storybook/theming'

import { ThemeProvider } from '../providers'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: { theme: themes.dark,},
}

export const decorators = [Story => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
)]
