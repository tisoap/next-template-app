import { Home } from '.'

export const home = (args) => <Home {...args} />
Home.args = { message: 'Hello!', loading: false }

export default {
	title: 'Home',
	component: Home
}
