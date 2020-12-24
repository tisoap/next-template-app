import { themes } from '@storybook/theming'
import { FC } from 'react'
import { ThemeProvider } from '../providers'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: { theme: themes.dark,},
}

export const decorators = [(Story: FC) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
)]
