import { Home } from '.'
import type { HomeProps } from '.'
import type { Meta, Story } from '@storybook/react/types-6-0'

export default {
	title: 'Home',
	component: Home
} as Meta

const Template: Story<HomeProps> = (args) => <Home {...args} />

export const home = Template.bind({})
home.args = { message: 'Hello!', loading: false }
