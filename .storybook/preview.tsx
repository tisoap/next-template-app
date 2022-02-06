import { themes } from '@storybook/theming'
import { theme } from '../providers/Theme/theme'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: { theme: themes.dark,},
	chakra: { theme },
}

