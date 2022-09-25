import { Center, Heading } from '@chakra-ui/react'
import { Counter } from 'components'

export const CounterPage = () => {
	return (
		<Center height='100%' flexDirection='column'>
			<Heading>Counter</Heading>
			<Counter />
		</Center>
	)
}

export default CounterPage
