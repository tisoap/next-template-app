import { Meta, Story } from '@storybook/react/types-6-0'

import { Home, HomeProps } from '.'

export default {
	title: 'Home',
	component: Home
} as Meta

const Template: Story<HomeProps> = (args) => <Home {...args} />

export const home = Template.bind({})
home.args = { message: 'Hello!', loading: false }
